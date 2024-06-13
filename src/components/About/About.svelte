<script>
	import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    import dp from '$lib/images/dp.jpg';
    
    let wrapper;
  

	onMount(() => {
       gsap.registerPlugin(ScrollTrigger);

        const textElements = wrapper.querySelectorAll('.animate-text');

    textElements.forEach(element => {
      const words = element.textContent.trim().split(/\s+/);
      element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    });

    const wordSpans = wrapper.querySelectorAll('.word');

    gsap.from(wordSpans, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: 'power4.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 80%',
        toggleActions: 'restart pause resume reset'
      },
    });

    const dpholder = document.querySelector('#dp-holder');
    gsap.to(dpholder, {
      y: 20,
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 80%',
        toggleActions: 'restart pause resume reset',
      },
      width: '200px',
      height: '200px',
      filter: "blur(0.5px)",
      top: '-8%'
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    });
</script>
<div class="about flex flex-col justify-center items-center h-screen z-90 relative">
    <img src={dp} alt="profile-picture" class="rounded-full w-2 h-2 absolute" id="dp-holder"/>
  <div bind:this={wrapper} class="wrapper w-3/5">
    <h2 class="text-2xl tracking-widest text-brand font-thin mb-8">ABOUT ME</h2>
    <span class="text-5xl text-brand font-thin text-left block mb-4 animate-text tracking-wider ">
      Selectively skilled software engineer who transforms pixels to impactful experiences.
    </span>
    <span class="text-5xl text-brand font-thin text-left block animate-text tracking-wider">
      I craft seamless digital experiences from frontend finesse to backend robustness, with a touch of DevOps.
    </span>
  </div>
</div>

<style>
</style>
