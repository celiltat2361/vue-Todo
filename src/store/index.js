import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        user: "Celil",
        title: "Wake up",
        done: false,
        dueDate: ""
      },
      {
        id: 2,
        user: "Tuba",
        title: "breakfast",
        done: false,
        dueDate: ""
      },
      {
        id: 3,
        user: "Hikmet",
        title: "study lesson",
        done: false,
        dueDate: ""
      },
      {
        id: 4,
        user: "Nail",
        title: "read book",
        done: false,
        dueDate: ""
      },

    ],
    snackbar: {
      show: false,
      text: "",
    },
    sorting: false
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        user: "",
        timeNow: Date.now(),
        done: false,
        dueDate: null
      }
      state.tasks.unshift(newTask)
    },
    addUser(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.user = payload.user
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    },
    toggleSorting(state) {
      state.sorting = !state.sorting 
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task updated!')
    },
    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Date updated!') 
    }
  },
  getters: {

  }
})

