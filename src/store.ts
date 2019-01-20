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
      state.savedRolls[0] = diceLine;
    }
  },
  actions: {}
});
