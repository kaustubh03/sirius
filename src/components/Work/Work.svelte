<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import laptop from '$lib/images/laptop.svg';
	import waves from '$lib/images/waves.svg';
	let wrapper;
  let image;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
    const projects = document.querySelector('#projects');
    const notall = document.querySelector('#notall');
    const some = document.querySelector('#some');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 50%',
        toggleActions: 'restart pause resume reset'
      }
    });

    tl.to(projects, {
      delay:0.5,
      duration: 0.2,
      display: 'block',
      ease: 'expo.in'
    })
      .to(notall, {
        delay: 0.3,
        duration: 0.2,
        display: 'block',
        ease: 'expo.in'
      }, '-=0.2') // Overlap with the previous animation
      .to(some, {
        delay: 0.3,
        duration: 0.2,
        display: 'block',
        ease: 'expo.in'
      }, '-=0.2')
	});
</script>

<div bind:this={wrapper} class="flex flex-col justify-center items-center h-screen z-90 relative mt-24">
  <span id="notall" class="text-8xl font-bold text-brand absolute top-5 left-5 hidden z-20">SELECTIVE</span>
  <span id="some" class="text-8xl font-bold text-brand absolute top-5 right-5 hidden z-20">CRAFTSMANSHIP</span>
  <span id="projects" class="text-[16em] font-bold text-brand hidden relative z-20">PROJECTS</span>
    <img src={laptop} alt="laptop" class="z-10 mt-80 absolute" width="1600" />
    <img src={waves} alt="waves" class="z-10 bottom-0 absolute ml-7 h-[45%]" />
  
  
</div>

<style>

</style>
