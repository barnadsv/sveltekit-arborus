import { writable } from 'svelte/store'

export const navbarStore = writable({
    temProgress: false,
    progress: 0,
    title: '',
    voltar: false
})
