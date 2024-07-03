<script>
    // @ts-nocheck
	import { onMount } from 'svelte';
    import {gsap} from "gsap/dist/gsap";
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
 	import bstack from '$lib/images/bstack.svg';
    import eiu from '$lib/images/eiu.jpeg';
    import paytm from '$lib/images/paytm.jpeg';
    import lambdatest from '$lib/images/lambdatest.jpeg';
    import etelligens from '$lib/images/etelligens.png';
    let isMobile;
    let experience;
    const experienceData = [
        {
            id: 1,
            name: 'Browserstack',
            tagline: 'Part code whisperer, part chaos tamer.',
            position: 'Lead Engineer',
            duration: '2021-Present',
            link: 'https://www.browserstack.com',
            icon: bstack
        },
        {
            id: 2,
            name: 'The EIU',
            tagline: "Turned 'It can't be done' into our next git commit.",
            position: 'Frontend Engineer L2',
            duration: '2020-2021',
            link: 'https://www.eiu.com',
            icon: eiu
        },
        {
            id: 3,
            name: 'Paytm',
            tagline: 'Turned coffee into scalable solutions.',
            position: 'Software Engineer',
            duration: '2019-2020',
            link: 'https://www.paytm.com',
            icon: paytm
        },
        {
            id: 4,
            name: 'Lambdatest',
            tagline: 'Made the impossible user stories possible.',
            position: 'Member of Technical Staff',
            duration: '2018-2019',
            link: 'https://www.lambdatest.com',
            icon: lambdatest
        },
        {
            id: 5,
            name: 'Etelligens',
            tagline: 'Broke code and conventions, but never promises.',
            position: 'Software Engineer',
            duration: '2017-2018',
            link: 'https://www.etelligens.com',
            icon: etelligens
        },
    ]
	  onMount(() => {
        isMobile = window.innerWidth <= 767;
        if(!isMobile) {
            gsap.registerPlugin(ScrollTrigger);

            const experienceItems = experience.querySelectorAll('.experience-item');

            experienceItems.forEach((item, index) => {
            gsap.from(item, {
                x: '100%', // Start from 100% to the right
                opacity: 0,
                duration: 1.5 - index * 0.2, // Decrease duration for each item
                ease: 'power2.out',
                scrollTrigger: {
                trigger: experience,
                start: 'top 90%',
                toggleActions: 'play none none reset'
                }
            });
            });

            // Clean up
            return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
        
    });
</script>

<div id="work" class="experience flex flex-col justify-start items-start h-full z-90 relative overflow-hidden px-4 xs:mt-8 sm:px-8 md:px-12 lg:px-16n">
  <div bind:this={experience} class="wrapper w-full">
    <h2 class="text-2xl tracking-widest text-brand font-thin mb-8 opacity-50">EXPERIENCE</h2>
    <div bind:this={experience} class="flex-col w-full text-brand">
      {#each experienceData as data}
        <a href={data.link} target="_blank" class="w-full" data-cursor-text="&#8599;">
          <div class="flex flex-col sm:flex-row items-center justify-between border-t-0.5 border-gray-800 py-6 sm:py-12 experience-item z-10">
            <div class="flex items-center mb-4 sm:mb-0">
              <img src={data.icon} alt="workplace-icon" class="w-12 sm:w-20 rounded-full mr-4 sm:mr-8" />
              <span class="text-2xl sm:text-6xl text-white work_company-name text-left">{data.name}</span>
            </div>
            <div class="text-center sm:text-right">
              <span class="text-sm sm:text-lg text-gray-400">{data.tagline}</span>
              <span class="block text-xs sm:text-base">{data.position}</span>
              <span class="block text-xs sm:text-base">{data.duration}</span>
            </div>
            <span class="hidden sm:block text-mask text-3xl sm:text-5xl uppercase font-semibold text-primary text-center">{data.tagline}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .experience-item {
    width: 100%;
    background: linear-gradient(to right, #ff8b0f, #b6b6b6) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
    position: relative;
    cursor: pointer;
  }

  span.text-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #b7ab98;
    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transform-origin: center;
    transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .experience-item:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  a {
    text-decoration: none;
  }
</style>
