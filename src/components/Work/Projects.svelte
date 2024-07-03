<script>
	// @ts-nocheck
	import {gsap} from "gsap/dist/gsap";
	import {onMount} from "svelte";
	import bstack from '$lib/images/bstack.svg';
    import eiu from '$lib/images/eiu.jpeg';
    import paytm from '$lib/images/paytm.jpeg';
    import lambdatest from '$lib/images/lambdatest.jpeg';
	let pictures;
	let counter = 0;

		onMount(() => {
			
		});

		const products = [
		{
			id: 1,
			name: 'Browserstack Accessibility Toolkit',
			type: 'SaaS - Chrome Extension',
			link: 'https://chromewebstore.google.com/detail/browserstack-accessibilit/fmkhjeeeojocenbconhndpiohohajokn',
			image:
				'https://i.postimg.cc/nhzVSY8W/Screenshot-2024-06-12-at-6-20-34-PM.png',
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
			image:'https://i.postimg.cc/sD7NmZt9/Screenshot-2024-06-29-at-8-07-13-PM.png',
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
			image:
				'https://i.postimg.cc/FzMGys0Z/Screenshot-2024-06-12-at-5-27-23-PM.png',
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
		},
	];
</script>
<!-- <div
	class="experience flex flex-col justify-start items-start h-full z-90 relative overflow-hidden xs:mx-4 lg:mx-16 xs:mt-24 sm:mt-24 md:mt-32 lg:mt-32"
>
	<div class="wrapper w-full">
		<h2 class="text-2xl xs:text-base lg:text-2xl tracking-widest text-brand font-thin mb-8 opacity-50">
			A Glimpse into My Work
		</h2>
		<ul class="flex-col w-full text-brand" id="project-list">
			{#each products as product}
            <a href={product.link} data-cursor-text="&#8599;">
				<li
					class="item flex xs:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center py-12 experience-item"
				>
                    {#if product.image}
                        <img
                            alt="thumbnail"
                            src={product.image}
                            class={`thumbnail-image-${product.id} absolute w-3/5 object-contain invisible z-50`}
					    />
                    {/if}
					
					<span class="flex-2 text-5xl text-white work_company-name xs:text-center lg:text-left pl-4 hover:text-brand xs:text-base sm:text-2xl md:text-3xl lg:text-5xl z-10"
                        on:mouseenter={handleMouseEnter}
                        on:mousemove={handleMouseMove}
                        on:mouseleave={handleMouseLeave}
                        on:focus={handleMouseMove}
                        data-product={product.id}
                        role="button"
                        tabindex="0"
                    >{product.name}</span
					>
					<span class="flex-1 text-right">{product.tagline} &nbsp; | &nbsp; {product.type}</span>
				</li>
            </a>
			{/each}
		</ul>
	</div>
</div> -->

<div
	class="experience flex flex-col justify-start items-start h-full z-90 relative overflow-hidden xs:mx-4 lg:mx-16 xs:mt-24 sm:mt-24 md:mt-32 lg:mt-32"
>

<h2 class="text-2xl xs:text-base lg:text-2xl tracking-widest text-brand font-thin mb-8 opacity-50">
			A Glimpse into My Work
		</h2>

		<div class="carousel-wrapper w-screen h-[600px]">
			<div class="carousel-body">
				<img
				alt="thumbnail"
				src='https://www.lambdatest.com/blog/wp-content/uploads/2024/04/Web20Automation.png'
				class={`w-full relative object-contain z-50`}
			/>
			<img
				alt="thumbnail"
				src='https://www.lambdatest.com/blog/wp-content/uploads/2024/04/Web20Automation.png'
				class={`w-full relative object-contain z-50`}
			/>
			</div>
			<div class="carousel-control">
				<button>Prev</button>
				<button>Next</button>
			</div>

		</div>

</div>

<style>
</style>
