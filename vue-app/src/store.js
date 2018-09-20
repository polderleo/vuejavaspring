import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        scoreBoardData: {
            nameHome: 'Home',
            nameGuest: 'Guest',
            scoreHome: 13,
            scoreGuest: 25
        }
    },

    mutations: {

    },
    actions: {

    }
})