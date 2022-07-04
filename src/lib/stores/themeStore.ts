import { writable } from 'svelte/store'
import type { Theme } from 'src/types'

const createWritableStore = (key: string, startValue: Theme) => {
  const { subscribe, set } = writable(startValue);
	return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }
      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    }
  };
}

let initialTheme: Theme = { mode: 'dark', os: 'ios' }

export const themeStore = createWritableStore('theme', initialTheme)