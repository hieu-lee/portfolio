<script lang="ts">
	import AboutPage from "./pages/AboutPage.svelte";
	import LandingPage from "./pages/LandingPage.svelte";
	import ContactPage from "./pages/ContactPage.svelte";
	import { pageurl } from "./store"
</script>

<main>
	{#if $pageurl === "landing"}
		<LandingPage/>
	{:else}
		{#if $pageurl === "contact"}
			<ContactPage/>
		{:else}
			<AboutPage/>
		{/if}
	{/if}
</main>

<style>
	main {
		height: 100%;
		padding: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>