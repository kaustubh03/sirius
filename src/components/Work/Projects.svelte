<script>
	// @ts-nocheck
	import {gsap} from "gsap/dist/gsap";

	const products = [
		{
			id: 1,
			name: 'Browserstack Accessibility Toolkit',
			type: 'SaaS - Chrome Extension',
			link: 'https://chromewebstore.google.com/detail/browserstack-accessibilit/fmkhjeeeojocenbconhndpiohohajokn',
			image:
				'https://i.postimg.cc/nhzVSY8W/Screenshot-2024-06-12-at-6-20-34-PM.png',
            tagline: 'Empowering Accessible Experiences, Effortlessly'
		},
		{
			id: 2,
			name: 'EIU Viewpoint',
			type: 'B2C - Web Application',
			link: 'https://viewpoint.eiu.com/',
			image: 'https://www.eiu.com/n/wp-content/themes/eiu/assets/images/login/Viewpoint.jpeg',
            tagline: 'Global Perspectives, Insightful Forecasts'
		},
		{
			id: 3,
			name: 'Paytm Business Khata',
			type: 'B2B - Web Application',
			link: 'https://business.paytm.com/business-khata',
            image: 'https://business.paytm.com/s3assets/images/business-khata/svg/track-customer.svg?version=1717592392',
            tagline: 'Streamlining Transactions, Simplifying Business'
		},
		{
			id: 4,
			name: 'Overhaul.js',
			type: 'State Management - NPM Package',
			link: 'https://chromewebstore.google.com/detail/browserstack-accessibilit/fmkhjeeeojocenbconhndpiohohajokn',
            tagline: 'Effortless State Management, Elevated Performance'
		},
		{
			id: 5,
			name: 'Lambdatest Automation',
			type: 'SaaS - Web Application',
			link: 'https://www.lambdatest.com/selenium-automation',
            image: 'https://www.lambdatest.com/blog/wp-content/uploads/2024/04/Web20Automation.png',
            tagline: 'Continuous Testing'
		}
	];
	const handleMouseEnter = (e) => {
    const product = e.target.getAttribute('data-product');
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
	class="experience flex flex-col justify-start items-start h-screen z-90 relative overflow-hidden xs:mx-4 lg:mx-16 xs:mt-24 sm:mt-24 md:mt-24 lg:mt-96 mt-96"
>
	<div class="wrapper w-full">
		<h2 class="text-2xl xs:text-base lg:text-2xl tracking-widest text-brand font-thin mb-8 opacity-50">
			Some of the Products I Built Professionally
		</h2>
		<ul class="flex-col w-full text-brand" id="project-list">
			{#each products as product}
            <a href={product.link}>
				<li
					class="item flex xs:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center py-12 experience-item"
				>
                    {#if product.image}
                        <img
                            alt="thumbnail"
                            src={product.image}
                            class={`thumbnail-image-${product.id} absolute w-3/5 object-contain invisible`}
					    />
                    {/if}
					
					<span class="flex-2 text-5xl text-accent work_company-name xs:text-center lg:text-left pl-4 hover:text-brand xs:text-base sm:text-2xl md:text-3xl lg:text-5xl z-10"
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
