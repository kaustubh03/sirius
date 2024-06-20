<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import dp from '$lib/images/dp3.jpeg';

  let wrapper;
  let isMobile = false;

  onMount(() => {
    isMobile = window.innerWidth <= 767;

    gsap.registerPlugin(ScrollTrigger);

    if (!isMobile) {
      const textElements = wrapper.querySelectorAll('.animate-text');

      textElements.forEach((element) => {
        const words = element.textContent.trim().split(/\s+/);
        element.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(' ');
      });

      const wordSpans = wrapper.querySelectorAll('.word');

      gsap.from(wordSpans, {
        opacity: 0,
        y: 20,
        duration: 0.1,
        ease: 'power4.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 90%',
          toggleActions: 'restart pause resume reset',
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
        filter: 'blur(0.5px)',
        opacity: 1,
        ease: 'power2.inOut',
        duration: 0.9,
      });

    }
    

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
</script>

<div id="about" class="about flex flex-col justify-center items-start xs:h-full sm:h-full md:h-full lg:h-screen z-90 relative section">
  <img
    src={dp}
    alt="profile-picture"
    class="absolute top-10 h-5/6 opacity-0 right-0 sm:hidden xs:hidden md:block lg:block xl:block sm:right-10  md:right-20 lg:right-32 xl:right-48"
    id="dp-holder"
  />
  <div bind:this={wrapper} class="wrapper w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 z-50 px-4 sm:px-8 md:px-12 lg:px-16">
    <h2 class="text-2xl tracking-widest text-brand font-thin mb-8 opacity-50">ABOUT ME</h2>
    <span
      class="text-3xl xs:text-base sm:text-3xl md:text-3xl lg:text-3xl text-brand font-thin text-left block mb-4 animate-text tracking-wider"
    >
      Selectively skilled software engineer who transforms pixels to impactful experiences.
    </span>
    <span
      class="text-3xl xs:text-base sm:text-3xl md:text-3xl lg:text-3xl text-brand font-thin text-left block animate-text tracking-wider"
    >
      I craft seamless digital experiences from frontend finesse to backend robustness, with a touch of DevOps.
    </span>
  </div>
</div>

<style>
    @media (max-width: 767px) {
    .animate-text,
    #dp-holder {
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
  }
</style>