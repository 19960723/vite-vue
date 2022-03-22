import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    async increment() {
      this.count++
    },
  },
  getters: {
    name: (state) => state.count
  }
})