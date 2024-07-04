<script>
	// @ts-nocheck
	import { gsap } from 'gsap/dist/gsap';
	import { onMount, onDestroy } from 'svelte';
	import bstack from '$lib/images/bstack.svg';
	import eiu from '$lib/images/eiu.jpeg';
	import paytm from '$lib/images/paytm.jpeg';
	import lambdatest from '$lib/images/lambdatest.jpeg';

	let carousel;
	let slides;
	let currentIndex = 0;
	let isPaused = false;
	let intervalId;
	let currentView = 'slide';

	const products = [
		{
			id: 1,
			name: 'Browserstack Accessibility Toolkit',
			type: 'SaaS - Chrome Extension',
			link: 'https://chromewebstore.google.com/detail/browserstack-accessibilit/fmkhjeeeojocenbconhndpiohohajokn',
			image: 'https://i.postimg.cc/nhzVSY8W/Screenshot-2024-06-12-at-6-20-34-PM.png',
			tagline: 'Empowering Accessible Experiences, Effortlessly',
			icon: bstack
		},
		{
			id: 2,
			name: 'EIU Viewpoint',
			type: 'B2C - Web Application',
			link: 'https://viewpoint.eiu.com/',
			image: 'https://www.eiu.com/n/wp-content/themes/eiu/assets/images/login/Viewpoint.jpeg',
			tagline: 'Global Perspectives, Insightful Forecasts',
			icon: eiu
		},
		{
			id: 3,
			name: 'Paytm Business Khata',
			type: 'B2B - Web Application',
			link: 'https://business.paytm.com/business-khata',
			image: 'https://i.postimg.cc/d132xzDc/Screenshot-2024-06-30-at-8-01-56-PM.png',
			tagline: 'Streamlining Transactions, Simplifying Business',
			icon: paytm
		},
		{
			id: 4,
			name: 'Overhaul.js',
			type: 'State Management - NPM Package',
			link: 'https://chromewebstore.google.com/detail/browserstack-accessibilit/fmkhjeeeojocenbconhndpiohohajokn',
			image: 'https://i.postimg.cc/sD7NmZt9/Screenshot-2024-06-29-at-8-07-13-PM.png',
			tagline: 'Effortless State Management, Elevated Performance',
			icon: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80NmQ4ZDAwZTE5MGJlNjQ3MDUzZjdkOTdmZDA0NzhlND9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5nKe6nJhOqDvUG6NzyDo5HVNm_RiThxzGMbRgg2P0Ls'
		},
		{
			id: 5,
			name: 'Lambdatest Automation',
			type: 'SaaS - Web Application',
			link: 'https://www.lambdatest.com/selenium-automation',
			image: 'https://www.lambdatest.com/blog/wp-content/uploads/2024/04/Web20Automation.png',
			tagline: 'Continuous Testing',
			icon: lambdatest
		},
		{
			id: 11,
			name: 'Cognitive Complexity Checker',
			type: 'VS Code Extension',
			link: 'https://marketplace.visualstudio.com/items?itemName=KaustubhSaxena.cognitive-complexity-checker',
			image: 'https://i.postimg.cc/FzMGys0Z/Screenshot-2024-06-12-at-5-27-23-PM.png',
			tagline: 'Cognitive Clarity, Coding Confidence'
		},
		{
			id: 12,
			name: 'Code Scout - AI Assist',
			type: 'VS Code Extension',
			link: 'https://marketplace.visualstudio.com/items?itemName=KaustubhSaxena.codescout',
			image: 'https://i.postimg.cc/Z59dYgVZ/Screenshot-2024-06-12-at-4-56-50-PM.png',
			tagline: 'Intelligent Assistance, Effortless Coding'
		},
		{
			id: 16,
			name: 'Supscroll',
			type: 'NPM Package',
			link: 'https://supscroll.kaustubh.dev/',
			image: 'https://i.postimg.cc/kgPyg1YW/Screenshot-2024-06-29-at-7-46-55-PM.png',
			tagline: 'Scroll with style, implement with ease.'
		},
		{
			id: 13,
			name: 'The Adventures of Bob - Platformer Game',
			type: 'Web Platformer ',
			link: 'https://bob.kaustubh.dev',
			image: 'https://i.postimg.cc/pdnj8b2W/Screenshot-2024-06-12-at-5-29-28-PM.png',
			tagline: "Bob's Epic Odyssey, Leaping into Adventure"
		},
		{
			id: 14,
			name: 'Monochroma.js',
			type: 'NPM Package',
			link: 'https://www.npmjs.com/package/monochroma',
			image: 'https://i.postimg.cc/N0fHJ970/Screenshot-2024-06-12-at-5-41-55-PM.png',
			tagline: 'Sleek Darkness, Seamless Transitions'
		},
		{
			id: 15,
			name: 'Meridian',
			type: 'Web application',
			link: 'https://meridian-three.vercel.app/',
			image: 'https://i.postimg.cc/cLQyJhjv/Screenshot-2024-06-12-at-5-46-32-PM.png',
			tagline: 'Parsing Markdown, One at a time'
		},
		{
			id: 16,
			name: 'Slapster',
			type: 'Web application',
			link: 'https://slapster.vercel.app/',
			image: 'https://i.postimg.cc/Hs339PKG/Screenshot-2024-06-12-at-5-48-25-PM.png',
			tagline: 'Stress-Free Slapping, Therapeutic Tapping'
		}
	];

	onMount(() => {
		slides = carousel.querySelectorAll('.carousel-slide');
		setPositions();

		startAutoSlide();
	});

	function setPositions() {
		gsap.set(slides, {
			yPercent: (i) => i * 100
		});
	}

	function startAutoSlide() {
		intervalId = setInterval(() => {
			if (!isPaused) {
				slide(1);
			}
		}, 3000);
	}

	function stopAutoSlide() {
		clearInterval(intervalId);
	}

	function slide(direction) {
		const numSlides = slides.length;
		currentIndex = (currentIndex + direction + numSlides) % numSlides;

		gsap.to(slides, {
			duration: 0.5,
			yPercent: (i) => (i - currentIndex) * 100,
			ease: 'power2.inOut'
		});
	}

	onDestroy(() => {
		stopAutoSlide();
	});

	function handleMouseEnter() {
		isPaused = true;
	}

	function handleMouseLeave() {
		isPaused = false;
	}

	function handlePrevious() {
		slide(-1);
	}

	function handleNext() {
		slide(1);
	}

	function handleViewChange(e, value) {
		currentView = value;
		if(value === 'slide') {
			slide(1);
			startAutoSlide();
		}
	}

	const handleMouseEnterList = (e) => {
		const product = e.target.getAttribute('data-product');
		console.log(product);
		const image = document.querySelector(`.thumbnail-image-${product}`);
		gsap.to(image, { autoAlpha: 1 });
	};

	const handleMouseLeaveList = (e) => {
		const product = e.target.getAttribute('data-product');
		const image = document.querySelector(`.thumbnail-image-${product}`);
		gsap.to(image, { autoAlpha: 0 });
	};

	const handleMouseMove = (e) => {
		const product = e.target.getAttribute('data-product');
		const image = document.querySelector(`.thumbnail-image-${product}`);
		gsap.set(image, { x: e.offsetX - 200 });
	};
</script>

<div
	class="experience flex flex-col justify-start items-start h-full z-90 relative overflow-hidden xs:mx-4 lg:mx-8 xs:mt-24 sm:mt-24 md:mt-32 lg:mt-32 w-full"
>
	<div class="flex justify-between w-full pb-8">
		<h2
			class="text-2xl xs:text-base lg:text-2xl tracking-widest text-brand font-thin mb-8 opacity-50"
		>
			A Glimpse into My Work
		</h2>
		<div class="flex items-center">
			<button class={`text-brand xs:text-base lg:text-2xl ${currentView === 'slide' ? 'opacity-100' :'opacity-60'}  mr-2 font-thin tracking-widest flex items-center`} on:click={(e) => {handleViewChange(e, 'slide')}}>&#x25A3; <span class="text-base">Slide</span></button>
			<button class={`text-brand xs:text-base lg:text-2xl ${currentView === 'list' ? 'opacity-100' :'opacity-60'} font-thin tracking-widest flex items-center`} on:click={(e) => {handleViewChange(e, 'list')}}>&#x25A4; <span class="text-base">List</span></button>
			
		</div>
	</div>
	<div class={`carousel-wrapper w-screen h-[600px] relative overflow-hidden ${currentView === 'slide' ? 'block' :'hidden'}`} bind:this={carousel}>
		<div class="carousel-body">
			{#each products as product}
				<div
					role="list"
					data-cursor-text="||"
					class="carousel-slide absolute top-0 left-0 w-full h-full"
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
				>
					<img alt={product.name} src={product.image} class="w-full h-full object-contain" />
					<div
						class="slide-info absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4"
					>
						<h3 class="text-xl">{product.name}</h3>
						<p>{product.tagline}</p>
						<p>{product.type}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="carousel-control absolute bottom-0 right-40 z-50">
			<button
				class="text-white w-12 h-12 px-4 py-2 bg-gray-800 rounded-full text-2xl bg-transparent"
				on:click={handlePrevious}
				data-cursor-text=" ">&uarr;</button
			>
			<button
				class="text-white px-4 py-2 w-12 h-12 bg-gray-800 rounded-full text-2xl bg-transparent"
				on:click={handleNext}
				data-cursor-text="">&darr;</button>
		</div>
	</div>
	<div class={`wrapper w-full h-auto ${currentView === 'list' ? 'block' : 'hidden'}`}>
		<ul class="flex-col w-full text-brand" id="project-list">
			{#each products as product}
				<a href={product.link} data-cursor-text="&#8599;">
					<li
						class="item flex xs:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center experience-item"
					>
						{#if product.image}
							<img
								alt="thumbnail"
								src={product.image}
								class={`thumbnail-image-${product.id} absolute w-3/5 object-contain invisible z-50`}
							/>
						{/if}

						<span
							class="flex-2 text-white work_company-name xs:text-center lg:text-left hover:text-brand xs:text-2xl z-10 pb-4"
							on:mouseenter={handleMouseEnterList}
							on:mousemove={handleMouseMove}
							on:mouseleave={handleMouseLeaveList}
							on:focus={handleMouseMove}
							data-product={product.id}
							role="button"
							tabindex="0">{product.name}</span
						>
						<span class="flex-1 text-right">{product.tagline} &nbsp; | &nbsp; {product.type}</span>
					</li>
				</a>
			{/each}
		</ul>
	</div>



	
</div>

<style>
	.carousel-wrapper {
		position: relative;
		overflow: hidden;
	}
	.carousel-slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	 .thumbnail-image {
		transform: translateX(-50%) translateY(-50%);
		top: 50%;
		left: 50%;
		z-index: 10;
	}
</style>
