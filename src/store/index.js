import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase('db');
db.config.debug = false

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        user: "",
        title: "Wake up",
        done: false,
        dueDate: ""
      },
      {
        id: 2,
        user: "",
        title: "breakfast",
        done: false,
        dueDate: ""
      },
      {
        id: 3,
        user: "",
        title: "study",
        done: false,
        dueDate: ""
      },
      {
        id: 4,
        user: "",
        title: "read",
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
    addTask(state, newTask) {
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
    setTasks(state, tasks) {
      state.tasks = tasks
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
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        user: "",
        timeNow: Date.now(),
        done: false,
        dueDate: null
      }
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask)
        commit('showSnackbar', 'Task added!')
      })
    },
    addUser({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        user: payload.user
      }).then(() => {
        commit('addUser', payload)
      })
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done 
      }).then(() => {
        commit('doneTask', id)
      })
    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id: id }).delete().then(() => {
        commit('deleteTask', id)
        commit('showSnackbar', 'Task deleted!')
      })
    },
    updateTaskTitle({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() => {
        commit('updateTaskTitle', payload)
        commit('showSnackbar', 'Task updated!')
      })
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('updateTaskDueDate', payload)
        commit('showSnackbar', 'Task updated!')
      })
    },
    setTasks({ commit }, id) {
      db.collection('tasks').set(id)
      commit('setTasks', id)
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    }
  },

  getters: {
  }
})

