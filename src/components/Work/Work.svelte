<script>
  // @ts-nocheck

  import { onMount } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
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
      delay: 0.5,
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
      }, '-=0.2');
  });
</script>

<div bind:this={wrapper} class="flex flex-col justify-center items-center h-screen z-90 relative mt-36 xs:h-52 sm:h-52 md:h-52 lg:h-screen xl:h-screen 2xl:h-screen">
  <span id="notall" class="text-4xl xs:text-2xl sm:text-4xl md:text-6xl font-bold text-brand absolute top-5 left-5 hidden z-20">SELECTIVE</span>
  <span id="some" class="text-4xl xs:text-2xl sm:text-4xl md:text-6xl font-bold text-brand absolute top-5 right-5 hidden z-20">CRAFTSMANSHIP</span>
  <span id="projects" class="text-6xl xs:text-5xl sm:text-5xl md:text-8xl lg:text-[16em] font-bold text-brand hidden relative z-20">PROJECTS</span>
  <img src={laptop} alt="laptop" class="z-10 mt-40 sm:mt-60 md:mt-40 absolute w-3/4 sm:w-2/3 md:w-auto xs:hidden sm:hidden md:block lg:block xl:block 2xl:block" width="1600" />
  <img src={waves} alt="waves" class="z-10 bottom-12 absolute ml-7 h-1/3 sm:h-2/5 md:h-[45%] md:w-[64%] md:w-[64%] xs:hidden sm:hidden md:block lg:block xl:block 2xl:block" />
</div>

<style>
</style>