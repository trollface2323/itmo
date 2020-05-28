import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        active: false
    },
    mutations:{
        block_scroll(state, payload){
            state.active = payload
        }
    }
})