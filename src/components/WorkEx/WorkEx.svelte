<script>
	import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
 	import bstack from '$lib/images/bstack.svg';
    import eiu from '$lib/images/eiu.jpeg';
    import paytm from '$lib/images/paytm.jpeg';
    import lambdatest from '$lib/images/lambdatest.jpeg';
    import etelligens from '$lib/images/etelligens.png';

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
            start: 'top 80%',
            toggleActions: 'play none none reset'
            }
        });
        });

        // Clean up
        return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<div class="experience flex flex-col justify-start items-start h-screen z-90 relative overflow-hidden mx-16">
    <div bind:this={experience} class="wrapper w-full">
        <h2 class="text-2xl tracking-widest text-brand font-thin mb-8">EXPERIENCE</h2>
        <div bind:this={experience} class="flex-col w-full text-brand">
            {#each experienceData as data}
                <a href={data.link} target="_blank">
                    <div class="flex items-center justify-center border-t-0.5 border-gray-800 py-12 experience-item">
                        <img src={data.icon} alt="workplace-icon" class="w-20 rounded-full mr-8"/>
                        <span class="flex-1 text-6xl text-accent work_company-name text-left">{data.name}</span>
                        <span class="flex-1 text-right">{data.tagline}</span>
                        <span class="flex-1 text-right">{data.position}</span>
                        <span class="flex-1 text-right">{data.duration}</span>
                        <span class="text-mask text-5xl text-center uppercase font-semibold text-primary">{data.tagline}</span>
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
        transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
        

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
        transition: all cubic-bezier(.1,.5,.5,1) 0.4s;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
     .experience-item:hover > span {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
     #bgVideo {
        position: absolute;
        right: 0;
        bottom: 0;
        top:0;
        object-fit: fill;
    }
</style>
