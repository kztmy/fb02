import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageList: []
  },
  mutations: {
    addMessageToMessageList(state, inputMessage) {
      state.messageList.push({message: inputMessage});
    }
  },
  actions: {
  },
  modules: {
  }
})
