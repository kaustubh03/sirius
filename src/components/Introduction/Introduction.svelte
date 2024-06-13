<script>
import gsap from 'gsap';
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
                start: 'center 80%',
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
            height: "5px"
        });

        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<video autoplay muted loop id="bgVideo">
  <source src={asset_1} type="video/webm">
</video>
<div class="fixed h-screen w-screen inset-x-0 inset-y-0 bg-black opacity-60" id="intro-overlay"></div>
<div class="text-container flex flex-col justify-center item-center z-10" id="introduction">
  <h1 class="text font-bold">WELCOME.<span class="text-mask">नमस्ते</span></h1>
  <h1 class="text font-bold">I'M KAUSTUBH SAXENA.<span class="text-mask">नाम है मेरा</span></h1>
  <h1 class="text font-bold">DEVELOPER.<span class="text-mask">काम है मेरा</span></h1>
  <h1 class="text font-bold">TRAVELLER.<span class="text-mask">शौक है मेरा</span></h1>
</div>

<style>
    .text-container {
        height: 100vh;
    }

    .text {
        font-size: 8vw;
        letter-spacing: -.01em;
        line-height: 100%;
        margin: 0;
        
        width: 100%;
        color: rgb(182, 182, 182, 0.2);
        background: linear-gradient(to right, #ff8b0f, #b6b6b6) no-repeat;
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
        background-color: #ff8b0f;
        color: #0D0D0D;

        clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
        transform-origin: center;
        transition: all cubic-bezier(.1,.5,.5,1) 0.4s;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text:hover > span {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    #bgVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        /* top: 10%; */
        left: 0;
        /* width: 50%; */
        object-fit: fill;
    }
</style>
