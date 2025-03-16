<script>
    // @ts-nocheck
import {gsap} from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { onMount } from 'svelte';
import asset_1 from '$lib/videos/intro.webm';

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        const textElements = gsap.utils.toArray('.text');
        const video = document.getElementById("bgVideo");
        const introOverlay = document.querySelector('#intro-overlay');
        textElements.forEach(text => {
        gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                trigger: text,
                start: 'center 100%',
                end: 'center 20%',
                scrub: true,
                },
            });
        });
        
        const introduction = document.querySelector('#introduction');

        gsap.to(video, {
            scrollTrigger: {
            trigger: introduction, // or any other element that should trigger the animation
            start: "top top",
            end: "bottom 80px",
            scrub: true, // smoothly scrubs the animation as you scroll
            },
            filter: "blur(8px)", // the final blur value
            ease: "none",
            width: "100%",
            height: "5px"
        });
        
        gsap.to(introOverlay, {
            scrollTrigger: {
            trigger: introduction, // or any other element that should trigger the animation
            start: "top top",
            end: "bottom 80px",
            scrub: true, // smoothly scrubs the animation as you scroll
            },
            ease: "none",
            width: "100%",
            height: "5px",
            opacity:0
        });
        const textMask = document.querySelector('.text-mask');
        textMask.classList.add('auto-show');

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<div class="relative h-screen section" id="introduction">
  <video autoplay muted loop id="bgVideo" class="absolute inset-0 w-full h-full object-cover xs:hidden sm:hidden md:hidden lg:block xl:block">
    <source src={asset_1} type="video/webm">
  </video>

  <div class="fixed inset-0 h-screen w-screen bg-black opacity-60 xs:hidden sm:hidden md:hidden lg:block xl:block" id="intro-overlay"></div>
  <div class="text-container flex flex-col justify-center items-center z-10 relative h-full px-4 md:px-8 lg:px-16">
    <!-- <h1 class="text font-bold sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[8vw]">WELCOME.<span class="text-mask">नमस्ते</span></h1> -->
    <h1 class="text font-bold xs:text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[8vw]">KAUSTUBH SAXENA.<span class="text-mask text-white p-4">नाम है मेरा</span></h1>
    <h1 class="text font-thin xs:text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[8vw]">DEVELOPER.<span class="text-mask text-white p-4">काम है मेरा</span></h1>
    <h1 class="text font-thin xs:text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[8vw]">TRAVELLER.<span class="text-mask text-white p-4">शौक है मेरा</span></h1>
  </div>
</div>

<style>
    .text-container {
        height: 100%;
    }

    .text {
        letter-spacing: -.01em;
        line-height: 100%;
        margin: 0;
        width: 100%;
        color: rgba(182, 182, 182, 0.458);
        background: linear-gradient(to right, #a367b1d5, #b6b6b6) no-repeat;
        -webkit-background-clip: text;
        background-clip: text;
        background-size: 0%;
        transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
        border-bottom: 1px solid #2F2B28;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
    }

    span.text-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #A367B1;
        clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
        transform-origin: center;
        transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .text:hover > span.text-mask {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    #bgVideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0; /* Ensure the video is behind other elements */
        opacity: 0.85
        }

        @media (max-aspect-ratio: 16/9) {
        #bgVideo {
            width: auto;
            height: 100%;
        }
        }
</style>
