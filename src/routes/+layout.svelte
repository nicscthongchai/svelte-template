<script>
	import '../styles/app.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<main class="flex min-h-full flex-col dark:bg-gray-900 dark:text-white">
	<slot />
</main>
