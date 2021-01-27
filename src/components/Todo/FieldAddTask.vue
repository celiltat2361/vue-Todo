<template>
  <v-text-field
       v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
        solo
        class="pa-3 pb-0 mt-n1" 
        label="Add Todo"
        append-icon="mdi-plus"
        hide-details
        clearable
      ></v-text-field>  
</template>

<script>
export default {
  data() {
    return {
      newUser: '',
      newTaskTitle: '',
      
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTaskTitle)
      this.newTaskTitle = ''
    },
  },
}
</script>