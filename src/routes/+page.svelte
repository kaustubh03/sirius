<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Introduction from '../components/Introduction/Introduction.svelte';
	import About from '../components/About/About.svelte';
	import WorkEx from '../components/WorkEx/WorkEx.svelte';
	import Work from '../components/Work/Work.svelte';
	import Lenis from 'lenis';
	import Projects from '../components/Work/Projects.svelte';
	import SideProjects from '../components/Work/SideProjects.svelte';
	import Travel from '../components/Travel/Travel.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis()

		// lenis.on('scroll', (e) => {
		// // console.log(e)
		// })

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time)=>{
		lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)
	});
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="firstContainer">
		<Introduction />
		<About />
		<WorkEx />
		<Work />
		<Projects />
		<SideProjects />
		<Travel />
	</div>
	<div class="h-screen flex-col justify-center items-center w-screen footer">
		<div class="flex items-center justify-center w-3/5">
			<span class="w-full text-6xl text-brand font-bold text-center flex justify-center items-center">
				"The calmer you are, the cleaner you think, the better you code."
			</span>
		</div>
			<div class="h-3/5">
				<h2 class="text-2xl tracking-widest text-brand font-thin mb-8">
					Contact to Connect
				</h2>
					<ul class="flex justify-between w-screen p-16">
				<li class="experience text-brand text-5xl">
					LinkedIn
				</li>
				<li class="experience text-brand ml-5 text-5xl">
					Instagram
				</li>
				<li class="experience text-brand ml-5 text-5xl">
					X
				</li>
				<li class="experience text-brand ml-5 text-5xl">
					Facebook
				</li>
				<li class="experience text-brand ml-5 text-5xl">
					PSN
				</li>
			</ul>
			</div>
		
		</div>
</section>

<style>
	.firstContainer {
		padding: 8px 32px;
	}

</style>
