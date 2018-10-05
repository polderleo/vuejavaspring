import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        scoreBoardData: {
            nameHome: 'HOME',
            nameGuest: 'GUEST',
            scoreHome: 34,
            scoreGuest: 25,
            clock: '00:00'
        },
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        }
    },

    mutations:{
        SOCKET_ONOPEN (state, event)  {
            Vue.prototype.$socket = event.currentTarget
            state.socket.isConnected = true
        },
        SOCKET_ONCLOSE (state, event)  {
            state.socket.isConnected = false
        },
        SOCKET_ONERROR (state, event)  {
            console.error(state, event)
        },
        // default handler called for all methods
        SOCKET_ONMESSAGE (state, message)  {
            state.socket.message = message.data
            console.log(state)
            console.log(message)
                    
        },
        // mutations for reconnect methods
        SOCKET_RECONNECT(state, count) {
            console.info(state, count)
        },
        SOCKET_RECONNECT_ERROR(state) {
            state.socket.reconnectError = true;
        },
        changeScoreboardData (state, data) {
            state.scoreBoardData.nameHome = data.scoreBoardData.nameHome;
            state.scoreBoardData.nameGuest = data.scoreBoardData.nameGuest;
            state.scoreBoardData.scoreHome = data.scoreBoardData.scoreHome;
            state.scoreBoardData.scoreGuest = data.scoreBoardData.scoreGuest;
        }
    },
    actions: {
        sendMessage: function(context, message) {
            Vue.prototype.$socket.send(message)
        },
        changeScoreboardData: function (context, data) {
            context.commit('changeScoreboardData', data);
        }
    }
})
// websocat -s9090
//{"action": "changeScoreboardData", "scoreBoardData": { "nameHome" : "SGBBM","nameGuest" : "HBF","scoreHome" : 8,"scoreGuest" : 12}}
