<template>
  <div>
    <dice-line 
      :key="roll.id"
      v-for="roll in savedRolls" >
    </dice-line>
    heya
  </div>
</template>

<script>
//import { mapMutations, mapState } from 'vuex';
import store from '../store'
import Vue from "vue";
import DiceLine from './DiceLine.vue'

export default {

  name: "dice-roll-group",
  components: {
    'dice-line': DiceLine,
    },
  computed:{ savedRolls (){
    return this.$store.state.savedRolls;
  }},

}
</script>

<style>

</style>
