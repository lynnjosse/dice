<template>
  <div>
    <!-- <h1>dice</h1>
    <dice-line></dice-line> -->
    <h1>dicerollgroup</h1>
    <dice-roll-group></dice-roll-group>

  </div>

</template>

<script>
import Vue from "vue";
import DiceLine from "@/components/DiceLine.vue"; // @ is an alias to /src
import DiceRollGroup from '@/components/DiceRollGroup.vue';
export default Vue.extend({
  name: "dice",
  components: {
    // 'dice-line': DiceLine,
    'dice-roll-group': DiceRollGroup
  }
});
</script>

<style>
</style>
