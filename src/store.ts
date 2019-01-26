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
    },
    {
      id: 2,
      diceNumber: 1,
      diceType: 20,
      modifier: 1,
    }],
  },
  mutations: {
    setDice(state, diceLine){
      const rolls = state.savedRolls
      const found = rolls.find(line => line.id === diceLine.id)
      const index = found ? rolls.indexOf(found) : 0
      state.savedRolls[index] = diceLine;
    }
  },
  actions: {
    setThoseDice({ commit }, diceLine) {
      commit('setDice', diceLine)
    }
  }
});
