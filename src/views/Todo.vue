<template>
  <div class="home">
      <!-- <v-text-field
        v-model="newTaskUser"
        @clic:append="addUser"
        @keyup.enter="addUser"
        solo
        class="pa-3 pb-1 mb-0"
        label="User"
        prepend-inner-icon="mdi-account-plus"
        hide-details
        clearable
      ></v-text-field> -->
      <v-text-field
        v-model="newTaskTitle"
        @clic:append="addTask"
        @keyup.enter="addTask"
        solo
        class="pa-3 pb-0 mt-n1" 
        label="Add Todo"
        prepend-inner-icon="mdi-plus"
        hide-details
        clearable
      ></v-text-field>
    <v-list 
      v-if="tasks.length"
      class="pt-0"
      two-line 
      flat>
      <div
       v-for="task in tasks" 
        :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'indigo lighten-4' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox 
              :input-value="task.done" 
              color="primary">
              </v-checkbox>
            </v-list-item-action>

             <v-list-item-content>
             <!-- <v-list-item-user 
              :class="{ 'font-weight-black': task.done }"
              >
              {{ task.user }}
              </v-list-item-user> -->
              
              <v-list-item-subtitle
                :class="{ 'text-decoration-line-through': task.done }"
              >
              {{ task.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  @click.stop="deleteTask(task.id)"
                  icon>
                  <v-icon color="red darken-4">mdi-delete-forever</v-icon>
                </v-btn>
              </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
     <div
      v-else
    >
      <v-icon
      class="pa-3"
        large
        color="blue darken-2"
      >
        mdi-message-text
      </v-icon>  
      <div class="text-h5 indigo--text pl-3">There is no task</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newUser: '',
      newTaskTitle: '',
      tasks: [
        {
          id: 1,
          user: "Celil",
          subtitle: "Wake up",
          done: false
        },
        {
          id: 2,
          user: "Tuba",
          subtitle: "breakfast",
          done: false
        },
        {
          id: 3,
          user: "Hikmet Nail",
          subtitle: "study lesson",
          done: false
        },
      ],
    };
  },
  methods: {
    doneTask(id) {
      //console.log('id: ', id)
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    addTask(){
      let newTask = {
        id: Date.now(),
        subtitle: this.newTaskTitle,
        done: false
      }
      this.tasks.unshift(newTask)
      this.newTaskTitle = ''  
    },
    /* addUser(){
      let newUser = {
        id: Date.now(),
        user: this.newTaskUser,
        done: false
      }
      this.tasks.push(newUser)  
    } */
  }
};
</script>
