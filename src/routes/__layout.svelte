<script context="module" lang="ts">
    /** @type {import('./__types/_layout').Load} */
    export async function load({ session }: any) {
        const localDarkTheme = session.theme 
        return { props: { localDarkTheme } }
    }
</script>

<script lang="ts">
    import { onMount } from 'svelte'
    import '../app.css'
    import { App } from 'konsta/svelte'
    import { themeStore } from '$lib/stores/themeStore'
    
    let osTheme: "material" | "ios" | "parent" | undefined = 'ios' // TODO: Detectar o dispositivo e definir o tema aqui, muito provavelmente utilizando store...

    let localDarkTheme: string

    let htmlElement: HTMLElement
    
    onMount(() => {
        htmlElement = document.firstElementChild as HTMLElement
        if (!('theme' in localStorage)) {
            themeStore.useLocalStorage()
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localDarkTheme = 'dark'
                themeStore.set({ ...$themeStore, mode: 'dark' })
            } else {
                localDarkTheme = 'light'
                themeStore.set({ ...$themeStore, mode: 'light' })
            }
        } else {
            themeStore.useLocalStorage()
        }
    })

    $: {
        if ($themeStore['mode'] && $themeStore['mode'] === 'dark') {
            if (htmlElement) {
                htmlElement.classList.add('dark')
                htmlElement.setAttribute("data-theme", 'dark')
                document.cookie = `theme=dark;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`
                localDarkTheme = 'dark'
            }
        } else {
            if (htmlElement) {
                htmlElement.classList.remove('dark')
                htmlElement.setAttribute("data-theme", 'light')
                document.cookie = `theme=light;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`
                localDarkTheme = 'light'
            }
        }
    }

    $: isDark = localDarkTheme === 'dark'

</script>

<svelte:head>
  <script>
    if (!('theme' in localStorage)) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute("data-theme", 'dark')
        document.cookie = 'theme=dark;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute("data-theme", 'light')
        document.cookie = 'theme=light;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
      }
    } else {
      let data = localStorage.getItem('theme');
      if (data) {
        data = JSON.parse(data);
        document.documentElement.classList.add(data.mode);
      }
    }
  </script>
</svelte:head>
  
{#if isDark}
<App theme={osTheme} dark safeAreas>
    <slot />
</App>
{:else}
<App theme={osTheme} safeAreas>
  <slot />
</App>
{/if}
