<script>
	// @ts-nocheck
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let LottiePlayer;

	let controlsLayout = [
		
	];

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
	
	const sideProjects = [
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
	const handleMouseEnter = (e) => {
		const product = e.target.getAttribute('data-product');
		console.log(product);
		const image = document.querySelector(`.thumbnail-image-${product}`);
		gsap.to(image, { autoAlpha: 1 });
	};

	const handleMouseLeave = (e) => {
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
	class="experience flex flex-col justify-start items-start h-screen relative overflow-hidden mx-16 mt-16"
>
{#if LottiePlayer}
	<div class="absolute z-0 flex justify-center -bottom-40 left-0 right-0">
		<LottiePlayer
			src="https://lottie.host/22bd5ad3-4df7-496f-afc1-7da3c1a0a43f/MxKTtBo48t.json"
			autoplay={true}
			loop={true}
			controls={true}
			renderer="svg"
			background="transparent"
			height={600}
			width={600}
			{controlsLayout}
		/>
	</div>
{/if}
	<div class="wrapper w-full z-50">
		<h2 class="text-2xl tracking-widest text-brand font-thin mb-8">
			Some of the Side Projects which I Built
		</h2>
		<ul class="flex-col w-full text-brand" id="project-list">
			{#each sideProjects as product}
				<a href={product.link}>
				<li
					class="item flex items-center justify-center py-12 experience-item"
				>

                    {#if product.image}
                        <img
                            alt="thumbnail"
                            src={product.image}
                            class={`thumbnail-image-${product.id} absolute w-3/5 object-contain invisible`}
					    />
                    {/if}
					
					<span class="flex-2 text-5xl text-accent work_company-name text-left hover:text-brand z-90 pl-4" on:mouseenter={handleMouseEnter}
						on:mousemove={handleMouseMove}
						on:mouseleave={handleMouseLeave}
						on:focus={handleMouseMove}
						data-product={product.id}
						role="button"
						tabindex="0"
					>{product.name}
					</span
					>
					<span class="flex-1 text-right">{product.tagline} &nbsp; | &nbsp; {product.type}</span>
				</li>
				</a>
			{/each}
		</ul>
	</div>
</div>

<style>
	.thumbnail-image {
		width: 25%;
		transform: translateX(-50%) translateY(-50%);
		top: 50%;
		left: 50%;
		z-index: 10;
	}
	

</style>
