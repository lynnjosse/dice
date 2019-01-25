import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    savedRolls: [{
      id: 1,
      diceNumber: 3,
      diceType: 20,
      modifier: 1,
    }]
  },
  mutations: {
    setDice(state, diceLine){
      console.log('diceline in mutation', diceLine)
      state.savedRolls[0] = diceLine;
      console.log('first element in arrayat the end of mutaiton', state.savedRolls[0])
      console.log('state.savedRolls', state.savedRolls)
    }
  },
  actions: {
    setThoseDice({ commit }, diceLine) {
      commit('setDice', diceLine)
    }
  }
});
