<script>
    import { Navbar, NavbarBackLink } from 'konsta/svelte'
    import ProgressBarArborus from './ProgressBarArborus.svelte'

    export let progress = 0
    export let title = ''
    export let voltar = false
</script>

<Navbar {title} class="sticky top-0">
    {#if voltar}
    <NavbarBackLink slot="left" text="" onClick={() => history.back()} />
    {/if}
</Navbar>
<Navbar slot="subnavbar">
    <div class="flex flex-col w-full items-center justify-center">
        <ProgressBarArborus {progress} />
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
    </div>
</Navbar>