<template>
    <v-list 
      class="pt-2"
      two-line 
      flat>
      <draggable tag="ul" 
        :list="$store.state.tasks" 
        handle=".handle"
      >
      <task class="listItems"
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
@media screen and (max-width: 540px) {
    .listItems {
    margin-left: -12px;
  }
    
  }
</style>