<script lang="ts">
    import { Page, useTheme } from 'konsta/svelte'
    import NavBarArborus from '$lib/components/NavBarArborus.svelte'
    import { navbarStore } from '$lib/stores/navbarStore'
    
    let theme = ''
    
    $: semNavbarArborus = $navbarStore.semNavbarArborus
    $: title = $navbarStore.title
    $: temProgress = $navbarStore.temProgress
    $: progress = $navbarStore.progress
    $: voltar = $navbarStore.voltar
    
    $: theme = useTheme((newValue) => (theme = newValue))
    
</script>


<style lang="postcss">
    :global(.artboard.phone-7) {
        width: 360px;
        height: 815px;
    }

    :global(.artboard.phone-full) {
        width: 100%;
        height: 100%;
    }

    :global(.artboard-demo) {
        justify-content: start;
    }
</style>

<Page>
    <div class="mockup-phone">
        <div class="camera"></div> 
        <div class="display">
        <div class="artboard artboard-demo phone-7">
            {#if !semNavbarArborus}
            <NavBarArborus {temProgress} {progress} {title} {voltar} />
            {/if}
            <div class="flex flex-col justify-between p-2 h-full w-full">
                <slot />
            </div>
        </div>
        </div>
    </div>
</Page>

