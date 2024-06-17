<script>
	import MouseFollower from "mouse-follower";
	import {gsap} from "gsap/dist/gsap";
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
	import Footer from '../components/Footer/Footer.svelte';
	
	MouseFollower.registerGSAP(gsap);


	onMount(() => {
			gsap.registerPlugin(ScrollTrigger);


		const cursor = new MouseFollower({
			container: document.body,
			speed: 0.3
		});


		// Mouse Follower
		const el = document.querySelector('.firstContainer');
		if(el) {
			el.addEventListener('mouseenter', () => {
			cursor.setText('Scroll Down');
			cursor.setSkewing(3);
			});
		}

		const lenis = new Lenis();

			lenis.on('scroll', () => {
				ScrollTrigger.update();
				if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 28) {
					cursor.setText('Scroll Up');
				}
				else {
					cursor.setText('Scroll Down');
				}
			});

			gsap.ticker.add((time) => {
				lenis.raf(time * 1000);
			});

			gsap.ticker.lagSmoothing(0);



		// Mouse follower to show video

		// const el = document.querySelector('.my-element');

		// el.addEventListener('mouseenter', () => {
		// 	cursor.setVideo('/video/example.mp4');
		// });

		// el.addEventListener('mouseleave', () => {
		// 	cursor.removeVideo();
		// });

	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
	<div class="firstContainer" data-cursor='-lg'>
		<Introduction />
		<About />
		<WorkEx />
		<Work />
		<Projects />
		<SideProjects />
		<Travel />
		<Footer />
	</div>
</section>

<style>
	.firstContainer {
		padding: 8px 32px;
	}
</style>
