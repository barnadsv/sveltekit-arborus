import { writable } from 'svelte/store'

export const navbarStore = writable({
    semNavbarArborus: false,
    temProgress: false,
    progress: 0,
    title: '',
    voltar: false
})
