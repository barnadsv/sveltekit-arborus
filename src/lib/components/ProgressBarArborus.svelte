<script>
    import { Progressbar } from 'konsta/svelte'
    import { navbarStore } from '$lib/stores/navbarStore'
    export let progress = $navbarStore.progress
</script>

<div class="w-full">
    <Progressbar {progress} colors={{ bg: 'bg-primary' }} />
</div>