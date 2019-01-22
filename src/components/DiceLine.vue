<template>
  <div>
    number to roll: 
  <select v-model="diceLine.diceNumber">
    <option default>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
  <span> d</span>
   <select v-model="diceLine.diceType">
    <option>4</option>
    <option>6</option>
    <option>8</option>
    <option>10</option>
    <option>12</option>
    <option default>20</option>
    <option>100</option>
  </select>
  <span> modifier: </span>
  <input v-model="diceLine.modifier" type="number" class="input-box">
<button class="button" v-on:click="rollem">roll {{ diceLine.diceNumber }} d{{diceLine.diceType}} + {{diceLine.modifier}}</button> 


  <div>result: {{result}}</div>


  </div>
</template>

<script>
import store from '../store';
import Vue from "vue";

const recursivelyRoll = (number, type) => {
if (number == 1) {
  return Math.floor(Math.random() * type) +1;
  }
return (Math.floor(Math.random() * type) +1) + recursivelyRoll(number - 1, type);
}

export default Vue.extend({
  name: "dice-line",
  computed:{ diceLine (){
    return this.$store.state.savedRolls[0];
  }},
  data: function() {
    return {
        result: 0,
      };    
  },
  methods: { 
    rollem:  function(){
      this.result = recursivelyRoll(this.diceLine.diceNumber, this.diceLine.diceType) + parseInt(this.diceLine.modifier);
      
      this.$store.commit('setDice', this.diceLine);
    },
  },
});
</script>

<style>
.input-box {
  width: 40px;
}
.button {
  border: 2px solid black;
  background-color: greenyellow;
}
</style>
