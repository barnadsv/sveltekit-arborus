<script lang="ts">
    import { Page, Navbar, Block, Button, List, ListButton } from 'konsta/svelte'
    import { themeStore } from '$lib/stores/themeStore'

    let title = 'Teste'

    const setDark = (e: Event) => {
        themeStore.set({ ...$themeStore, mode: 'dark' })
    }

    const setLight = (e: Event) => {
        themeStore.set({ ...$themeStore, mode: 'light' })
    }

    const setSystem = (e: Event) => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeStore.set({ ...$themeStore, mode: 'dark' })
        } else {
            themeStore.set({ ...$themeStore, mode: 'light' })
        }
    }

</script>

<Page>
    <Navbar {title} class="sticky top-0"></Navbar>
    <Block>
        <p>Bloco com texto konstaUI</p>
        <h1 class="text-3xl font-bold underline">
            Pagina inicial (ainda em teste)
        </h1>
        <button class="mt-2 btn">Botão DaisyUI</button>
        <Button>Botão konstaUI</Button>
        <List>
            <ListButton onClick={setLight}>Light</ListButton>
            <ListButton onClick={setDark}>Dark</ListButton>
            <ListButton onClick={setSystem}>System</ListButton>
        </List>
        <button class="mt-2 btn" on:click={setLight}>Light</button>
        <button class="mt-2 btn" on:click={setDark}>Dark</button>
        <button class="mt-2 btn" on:click={setSystem}>System</button>
    </Block>
</Page>
