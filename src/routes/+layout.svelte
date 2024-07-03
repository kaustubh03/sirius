<script>
	// @ts-nocheck
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	export const ssr=false;
</script>
<div class="app overflow-hidden">
	<!-- <Header /> -->
	<main class="bg-black">
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>

</style>
