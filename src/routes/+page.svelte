<script>
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
	import logo from '$lib/images/logo.png';

	let navLinks;
	let sections;
	let observer;
	
	onMount(() => {
			gsap.registerPlugin(ScrollTrigger);



		const lenis = new Lenis();

			lenis.on('scroll', () => {
				ScrollTrigger.update();
			});

			gsap.ticker.add((time) => {
				lenis.raf(time * 1000);
			});

			gsap.ticker.lagSmoothing(0);


		document.body.onmousemove = function(e) {
		document.documentElement.style.setProperty (
			'--x', (
			e.clientX+window.scrollX
			)
			+ 'px'
		);
		document.documentElement.style.setProperty (
			'--y', (
			e.clientY+window.scrollY
			) 
			+ 'px'
		);
		}
		navLinks = document.querySelectorAll('.menu li a');
		sections = document.querySelectorAll('.section');

		observer = new IntersectionObserver(handleIntersection, { rootMargin: '-50px' });

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			observer.disconnect();
		};
	});

	  function handleIntersection(entries) {
		entries.forEach((entry) => {
		const target = entry.target;
		const index = Array.from(sections).indexOf(target);
		const navLink = navLinks[index];

		if (entry.isIntersecting) {
			navLinks.forEach((link) => link.classList.remove('active'));
			navLink.classList.add('text-white');
		} else {
			navLink.classList.remove('text-white');
		}
		});
	}



</script>

<svelte:head>
	<title>Kaustubh Saxena</title>
	<meta name="description" content="Kaustubh Saxena" />
</svelte:head>
<section>
	<div id="invertedcursor" class="bg-accent"></div>
	<!-- <div>
		<img src={logo} alt="logo" width="200" class="z-50 fixed top-10" />
	</div> -->
		<ul class="fixed flex justify-center bottom-0 left-0 right-0 m-auto w-full z-20 opacity-75 text-brand uppercase text-right menu bg-primary">
			<li class=" xs:mr-4 lg:mr-24 hover:text-white tracking-wider z-10">
				<a href="#introduction">Home</a>
			</li>
			<li class="xs:mr-4 lg:mr-24 hover:text-white tracking-wider">
				<a href="#about">About</a>
			</li>
			<li class="xs:mr-4 lg:mr-24 hover:text-white tracking-wider">
				<a href="#work">Work</a>
			</li>
			<li class="xs:mr-4 lg:mr-24 hover:text-white tracking-wider">
				<a href="#travel">Travel</a>
			</li>
		</ul>
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
	/* .firstContainer {
		padding: 8px 32px;
	} */
	#invertedcursor {
		position: absolute;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		top: var(--y, 0);
		left: var(--x, 0);
		transform: translate(-50%, -50%);
		z-index: 1;
		mix-blend-mode: difference;
		transition: transform .2s;
	}

	 .menu .active {
		/* Styles for the active navigation link */
		color: white;
		font-weight: 900 !important;
		/* Add any other styles as needed */
	}
</style>
