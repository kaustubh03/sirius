<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import dp from '$lib/images/dp.jpg';

	let wrapper;
	let isMobile = false;

	function getRandomBorderRadius() {
		const getRandomValue = () => Math.floor(Math.random() * 100);
		return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
	}

	function animateBorderRadius() {
		const dpholder = document.querySelector('#dp-holder');
		gsap.to(dpholder, {
			borderRadius: getRandomBorderRadius(),
			duration: 3,
			ease: 'sine.inOut',
			onComplete: animateBorderRadius
		});
	}

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
					toggleActions: 'restart pause resume reset'
				}
			});
			animateBorderRadius();

			
      // Parallax effects
      gsap.to('#dp-holder', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('#part1', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('#part2', {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('#part3', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
	});
</script>

<div
	id="about"
	class="about flex flex-col justify-center items-start xs:h-full sm:h-full md:h-full lg:h-screen z-90 relative section"
><div class="dp-holder-wrapper overflow-hidden absolute top-10 h-5/6 w-2/5 right-0 sm:hidden xs:hidden md:block lg:block xl:block sm:right-10 md:right-20 lg:right-10 xl:right-10 overflow-hidden">
	<div id="part1" class="h-[75px] w-[75px] bg-white absolute top-32 left-32 dropElements"></div>
  <div id="part2" class="h-[100px] w-[100px] bg-white absolute right-0 top-1/2 dropElements"></div>
  <div id="part3" class="h-[100px] w-[100px] bg-white absolute bottom-10 left-48 dropElements"></div>
  <img
		src={dp}
		alt="profile-picture"
		class=""
		id="dp-holder"
	/>
  </div>
	<div
		bind:this={wrapper}
		class="wrapper w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 z-50 px-4 sm:px-8 md:px-12 lg:px-16 relative"
	>
		<h2 class="text-2xl tracking-widest font-mono text-brand font-thin mb-8 opacity-50">ABOUT ME</h2>
		<span
			class="text-3xl xs:text-base sm:text-3xl md:text-3xl lg:text-3xl text-brand font-thin text-left block mb-4 animate-text tracking-wider"
		>
			Selectively skilled software engineer who transforms pixels to impactful experiences.
		</span>
		<span
			class="text-3xl xs:text-base sm:text-3xl md:text-3xl lg:text-3xl text-brand font-thin text-left block animate-text tracking-wider"
		>
			I craft seamless digital experiences from frontend finesse to backend robustness, with a touch
			of DevOps.
		</span>
	</div>
</div>

<style>
  #about {
    background-image: url('$lib/images/about.svg');
    background-size: contain;
    background-position-y: center;
  }
	#dp-holder {
		opacity: 0.7;
		border-radius: 29% 71% 74% 26% / 52% 26% 74% 48%;
    width: 100%;
    height: 100%;
    object-fit: cover;
	}
  .dropElements {
    border-radius: 29% 71% 74% 26% / 52% 26% 74% 48%;
    transform: translate(-50%, -50%);
		z-index: 1;
		mix-blend-mode: difference;
		transition: transform 0.2s;
  }
	@media (max-width: 767px) {
		.animate-text,
		#dp-holder {
			opacity: 1 !important;
			transform: none !important;
			filter: none !important;
			border-radius: 29% 71% 74% 26% / 52% 26% 74% 48% !important;
		}

		#about {
			background-size: cover;
			height: 100vh;
		}
	}
</style>
