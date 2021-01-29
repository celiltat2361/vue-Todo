<template>
  <v-btn 
    @click="$store.commit('toggleSorting')"
    class="button-done-sorting"
    color="indigo"
  >
   Done 
  </v-btn>   
</template>

<script>
export default {

}
</script>

<style>
  .button-done-sorting {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }
</style>