// 你可以认为 :
// state 是 store 的数据 (data)
// getters 是 store 的计算属性 (computed)
// actions 是方法 (methods)

// 为方便上手使用，Option Store 应尽可能直观简单。

export const useMyStore = definePiniaStore('counter', {
  state: () => ({
    count: 0
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment () {
      this.count++
    },
  },
  persist: {
    storage: persistedState.cookiesWithOptions()
  }
})