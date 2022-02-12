import { createStore } from 'vuex'

export default createStore({
  state: {
    services: [],
    blog: []
  },
  mutations: {
    setBlogs(state, payload){
      state.blog = payload
    },

  },
  actions: {
    async  fetchApi({commit}){
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
          const apiPost = await res.json()
          commit('setBlogs', apiPost)
        } catch (error) {
          console.log(error, 'error api')
        }
      
    }

  },
  modules: {
  }
})
