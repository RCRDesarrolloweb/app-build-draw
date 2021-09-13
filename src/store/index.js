import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {

    },
    state:{
      color: null
    },
    mutations:{
      set_color(state, color){
        state.color = color
      }
    },
    getters:{
      color(state){
        return state.color
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
  })

  return Store
})
