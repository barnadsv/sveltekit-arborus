<script>
    import { Progressbar } from 'konsta/svelte'
    export let progress = 0
</script>

<div class="w-full">
    <Progressbar {progress} colors={{ bg: 'bg-primary' }} />
</div>