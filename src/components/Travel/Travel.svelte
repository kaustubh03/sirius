<script>
	// @ts-nocheck
	import {gsap} from "gsap/dist/gsap";
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
  import amsterdam from '$lib/images/travel/amsterdam.jpg';
  import tokyo from '$lib/images/travel/tokyo.jpg';
  import vienna from '$lib/images/travel/vienna.jpg';
  import helsinki from '$lib/images/travel/helsinki.jpg';
  import baku from '$lib/images/travel/baku.jpg';
  import hanoi from '$lib/images/travel/hanoi.jpg';
  import brussels from '$lib/images/travel/brussels.jpg';
  import tallinn from '$lib/images/travel/tallinn.jpg';
  import bratislava from '$lib/images/travel/bratislava.jpg';
  import tbilisi from '$lib/images/travel/tbilisi.jpg';
  import india from '$lib/images/travel/india.jpg';

	// const select = (e) => document.querySelector(e);
	const selectAll = (e) => document.querySelectorAll(e);
  
  let places = [ {
    id: india,
    title: 'India'
  },{
    id: amsterdam,
    title: 'Amsterdam'
  },
  {
    id: tokyo,
    title: 'Tokyo'
  },
  {
    id: vienna,
    title: 'Vienna'
  },
  {
    id: helsinki,
    title: 'Helsinki'
  },
  {
    id: baku,
    title: 'Baku'
  },
  {
    id: hanoi,
    title: 'Hanoi'
  },
  {
    id: brussels,
    title: 'Brussels'
  },
  {
    id: tallinn,
    title: 'Tallinn'
  },
  {
    id: bratislava,
    title: 'Bratislava'
  },
  {
    id: tbilisi,
    title: 'Tbilisi'
  }
]

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tracks = selectAll('.sticky-element');

		tracks.forEach((track, i) => {
			let trackWrapper = track.querySelectorAll('.track');
			let allImgs = track.querySelectorAll('.image');

			let trackWrapperWidth = () => {
				let width = 0;
				trackWrapper.forEach((el) => (width += el.offsetWidth));
				return width;
			};

			gsap.defaults({
				ease: 'none'
			});

			let scrollTween = gsap.to(trackWrapper, {
				x: () => -trackWrapperWidth() + window.innerWidth,
				scrollTrigger: {
					trigger: track,
					pin: true,
					scrub: 1,
					start: 'center center',
					end: () => '+=' + (track.scrollWidth - window.innerWidth - 58),
					onRefresh: (self) => {
						self.getTween().resetTo('totalProgress', 0);
					},
					invalidateOnRefresh: true,
					id: 'id-one'
				}
			});

			allImgs.forEach((img, i) => {
				// the intended parallax animation
				gsap.fromTo(
					img,
					{
						x: '-20vw'
					},
					{
						x: '20vw',
						scrollTrigger: {
							trigger: img.parentNode, //.panel-wide
							containerAnimation: scrollTween,
							start: 'left right',
							end: 'right left',
							scrub: true,
							invalidateOnRefresh: true,
							onRefresh: (self) => {
								if (self.start < 0) {
									self.animation.progress(gsap.utils.mapRange(self.start, self.end, 0, 1, 0));
								}
							},
							id: 'id-two'
						}
					}
				);
			});
		});

		// Scroll to the top on initial load
		window.scrollTo(0, 0);
	});
</script>
<section class="sticky-element half-height mb-28 section" id="travel" data-cursor-text='&darr;'>
      <div class="flex justify-center">
        <a href="#sideProjects" class="absolute top-20 left-10 z-50 text-brand text-2xl bg-primary p-4 opacity-50 hover:opacity-100">Skip to previous section &#8689;</a>
        <a href="#contact" class="absolute bottom-20 left-10 z-50 text-brand text-2xl bg-primary p-4 opacity-50 hover:opacity-100">Skip to next section &#8690;</a>
      </div>
	<div class="track flex relative">
          <span class="text-[12em] text-brand font-bold text-left ml-8 title">TRAVEL JOURNAL</span>

		<div class="track-flex">
      {#each places as place}
        <div class="panel-wide">
          <span class="absolute text-[16em] text-white z-50 h-full w-full flex justify-center items-center xs:text-5xl sm:text-5xl md:text-5xl lg:text-[16em] xl:text-[16em] 2xl:text-[16em] opacity-85">
            {place.title}
          </span>
          <img
            class="image z-10"
            src={place.id}
            alt={place.id}
          />
			</div>
      {/each}
		</div>
    
	</div>
  
</section>

<style>
.title {
  background-image: url('$lib/images/travel/bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y:center;
}
.sticky-element {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.track {
  width: fit-content;
  flex: 0 0 auto;
}

.track-flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 85vh;
  margin-inline: 4.5vw;
  /* overflow-x: auto; */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.panel-wide {
  position: relative;
  min-width: 100vw; /* Updated */
  height: 100%;
  overflow: hidden;
  flex: 0 0 100vw; /* Updated */
  scroll-snap-align: start;
  min-width: 105vw;
  flex: 0 0 105vw;
}

.panel-wide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.half-height .track-flex {
  gap: 2rem;
}
</style>
