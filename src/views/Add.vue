<template>
  <div class="home">
    <field-add-task />
  </div>
</template>

<script>
export default {
  name: "Add",
  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
  },
};
</script>
