<template>
  <div id="nav">
    <nav>
      <router-link :to="{ name: 'event-list' }">Home</router-link> |
      <router-link :to="{ name: 'event-create' }">Create an event</router-link> |
      <router-link :to="{ name: 'dice'}">dice</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
