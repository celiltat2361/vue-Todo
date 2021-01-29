<template>
  <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      solo
      class="pa-3 pb-0 mt-n1" 
      label="Add Todo"
  
      hide-details
      clearable
  >
  <template v-slot:append>
    <v-icon
      @click="addTask"
      color="green"
      :disabled="newTaskTitleInvalid"
    >
      mdi-plus
    </v-icon>
  </template>           
  
  </v-text-field>  
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    }
  },
    computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle
    }
  },
  methods: {
     addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    }
  },
}
</script>