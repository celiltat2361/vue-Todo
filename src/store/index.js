import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    snackbar: {
      show: true 
    }
  },
  mutations: {
    addTask(state, newTaskTitle){
      let newTask = {
        id: Date.now(),
        subtitle: newTaskTitle,
        done: false
      }
      state.tasks.unshift(newTask)      
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
