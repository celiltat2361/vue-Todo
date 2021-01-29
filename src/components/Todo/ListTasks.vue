<template>
    <v-list 
      class="pt-0"
      two-line 
      flat>
      <draggable tag="ul" :list="$store.state.tasks" handle=".handle">
      <task 
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
      />
      </draggable>
    </v-list>  
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    'task': require('@/components/Todo/Task.vue').default,
    draggable
  }
}
</script>

<style>

</style>