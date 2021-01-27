<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{ 'blue lighten-5' : task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

             <v-list-item-content>
              <v-list-item-subtitle
                :class="{ 'text-decoration-line-through': task.done }"
              >
              {{ task.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  @click.stop="$store.commit('deleteTask', task.id)"
                  icon>
                  <v-icon color="red darken-4">mdi-delete-forever</v-icon>
                </v-btn>
              </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>  
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
</style>