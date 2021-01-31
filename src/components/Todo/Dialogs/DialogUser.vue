<template>
  <v-dialog
    :value="true"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        Add User
      </v-card-title>
      <v-card-text>
        Add user for this task!
        <v-text-field
          v-model="taskUser"
          @keyup.enter="saveUser"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('close')"
          text
        >
          Cancel
        </v-btn>
        <v-btn
          @click="saveUser"
          color="red darken-1"
          text
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ['task'],
  data() {
    return {
      taskUser: null
    }
  },
  methods: {
    saveUser() {
      let payload = {
        id: this.task.id,
        user: this.taskUser
      }
      this.$store.commit('addUser', payload)
      this.$emit('close')
    }
  },
  mounted() {
    this.taskUser = this.task.user  
  }  
}
</script>
