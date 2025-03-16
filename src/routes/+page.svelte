<script>
	// @ts-nocheck
	import MouseFollower from 'mouse-follower';
	import { gsap } from 'gsap/dist/gsap';
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
	import Loader from '../components/Loader/Loader.svelte';

	let navLinks;
	let sections;
	let observer;
	let loader = true;
	let currentIndex = 0;
	let cursor;
	let isMobile = false;

	MouseFollower.registerGSAP(gsap);

	function updateText() {
		const words = ['Kaustubh Saxena', '🛫 TRAVELLING', '🎮 G a m i n g', '📘 R e a d i n g', '👨‍💻 ENGINEERING'];
		const text = document.getElementById('changingText');
		if (text) {
			gsap.to(text, {
				duration: 0.5,
				opacity: 0,
				onComplete: () => {
					text.textContent = words[currentIndex];
					gsap.to(text, {
						duration: 0.5,
						opacity: 1
					});
					currentIndex = (currentIndex + 1) % words.length;
				}
			});
		}
	}

	onMount(() => {
		isMobile = window.innerWidth <= 767;
		cursor = new MouseFollower({
			stateDetection: false
		});
		gsap.registerPlugin(ScrollTrigger);
		
		setTimeout(() => {
			
		}, 5000);
		let lastScrollTop = 0;
		window.addEventListener('scroll', () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				cursor.setText('&uarr;');
			}
			var st = window.pageYOffset || document.documentElement.scrollTop; 
			if (st > lastScrollTop) {
				cursor.removeText();
				cursor.setText('&darr;');
			} else if (st < lastScrollTop) {
				cursor.removeText();
				cursor.setText('&uarr;');
			} // else was horizontal scroll
			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

			const navbar = document.querySelector('.navbar');
			if (window.scrollY > 50) {
				navbar.classList.add('fixed');
				navbar.classList.remove('hidden');

				navLinks = document.querySelectorAll('.menu li a');
				sections = document.querySelectorAll('.section');
				observer = new IntersectionObserver(handleIntersection, { rootMargin: '-50px' });

				sections.forEach((section) => {
					observer.observe(section);
				});
			} else {
				navbar.classList.remove('fixed');
				navbar.classList.add('hidden');
			}
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

	function loadComplete () {
		console.log('Loader complete hhere');
		loader = false;

			const lenis = new Lenis({
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				direction: 'vertical',
				gestureDirection: 'vertical',
				smooth: true,
				mouseMultiplier: 1,
				smoothTouch: false,
				touchMultiplier: 2,
				infinite: false
			});

			lenis.on('scroll', () => {
				ScrollTrigger.update();
			});

			gsap.ticker.add((time) => {
				lenis.raf(time * 1000);
			});

			gsap.ticker.lagSmoothing(0);

			// Set up snap scrolling
			gsap.utils.toArray('.parent-section').forEach((section, i) => {
				ScrollTrigger.create({
					trigger: section,
					start: 'top top',
					end: 'bottom top',
					onEnter: () => lenis.scrollTo(section),
					onEnterBack: () => lenis.scrollTo(section)
				});
			});

			// MouseFollower
			const app = document.querySelector('main');
			app.addEventListener('mouseenter', () => {
				cursor.setSkewing(3);
			});

			// Initial call
			updateText();

			// Repeat the animation every 2 seconds
			setInterval(updateText, 2000);
	}
</script>

<svelte:head>
	<title>Kaustubh Saxena</title>
	<meta name="description" content="Kaustubh Saxena" />
</svelte:head>
{#if loader}
	<Loader loadComplete={loadComplete} />
{:else}
	<section id="app-wrapper">
		<div
			class="hidden flex justify-between top-0 left-0 right-0 m-auto w-full z-20 opacity-75 text-brand uppercase text-right navbar p-4 bg-black text-brand items-center xs:flex-col md:flex-row"
		>
			<svg xmlns="http://www.w3.org/2000/svg" height="45" width={`${isMobile ? "126" :"250"}`}>
				<text
					id="changingText"
					x="10"
					y="30"
					font-family="Teko"
					font-size={`${isMobile?'18':'24'}`}
					fill="#b7ab98"
					transform="skewX(-2)"
				>
					Kaustubh Saxena
				</text>
			</svg>
			<ul class="flex menu">
				<li class=" xs:mr-4 lg:mr-24 text-2xl hover:text-white tracking-wider z-10 font-teko">
					<a href="#introduction">Home</a>
				</li>
				<li class="xs:mr-4 lg:mr-24 text-2xl hover:text-white tracking-wider font-teko">
					<a href="#about">About</a>
				</li>
				<li class="xs:mr-4 lg:mr-24 text-2xl hover:text-white tracking-wider font-teko">
					<a href="#work">Work</a>
				</li>
				<li class="hover:text-white text-2xl tracking-wider font-teko">
					<a href="#travel">Travel</a>
				</li>
			</ul>
		</div>

		<div class="firstContainer" data-cursor="-lg">
			<section class="parent-section">
				<Introduction />
			</section>
			<section class="parent-section">
				<About />
			</section>
			<section class="parent-section">
				<WorkEx />
			</section>
			<section class="parent-section">
				<Work />
			</section>
			<section class="parent-section flex items-center">
				<Projects />
			</section>
			<!-- <section class="parent-section">
				<SideProjects />
			</section>W -->
			<Travel />
			<Footer />
		</div>
	</section>
{/if}

<style>
	/* .firstContainer {
		padding: 8px 32px;
	} */

	.menu .active {
		/* Styles for the active navigation link */
		color: white;
		font-weight: 900 !important;
		/* Add any other styles as needed */
	}
	.parent-section {
		min-height: 100vh;
	}
</style>
