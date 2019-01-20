<template>
  <div>
    <h1>dice</h1>
    <DiceLine></DiceLine>

  </div>

</template>

<script>
import Vue from "vue";
import DiceLine from "@/components/DiceLine.vue"; // @ is an alias to /src
export default Vue.extend({
  name: "dice",
  components: {
    DiceLine
  }
});
</script>

<style>
</style>
