

export const storage = ({
  state: {
    navbar: [],
    sidebar: []
  },
  getters: {
      getNavbar(state){
       return  state.navbar
      },
    getSidebar(state){
       return  state.sidebar
      }
  },
  mutations: {
      addToSidebar(state, payload){
          state.sidebar.push(payload)
      }
  },
  actions: {
  },
  modules: {
  }
})
