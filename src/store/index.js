//clsx is a tiny utility for conditionally joining CSS class names together.
//Zustand is a lightweight state management library for React.

import { create } from 'zustand'

export const useMacbookStore = create(set => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),


    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#2e2c2e', scale: 0.08 })
}))