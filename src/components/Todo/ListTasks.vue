<template>
    <v-list 
      class="pt-0"
      two-line 
      flat>
      <task 
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
      />
    </v-list>  
</template>

<script>
export default {
  components: {
    'task': require('@/components/Todo/Task.vue').default
    
  }
}
</script>

<style>

</style>