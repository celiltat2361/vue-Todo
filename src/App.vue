<template>
  <v-app id="inspire" class="allItems">
    <v-navigation-drawer 
      v-model="drawer"
      :mobile-breakpoint="768"
       app
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            My Todo App
          </v-list-item-title>
          <v-list-item-subtitle>
            Todo
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
        <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon class="textItem">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      src="horses.jpg"
      prominent
      height="170"
      >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-h4 ml-4">My Todo List</v-app-bar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
     <v-main>
     <router-view></router-view>
     <snackbar />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
        items: [
          { title: 'Todo', icon: 'mdi-clipboard-list-outline', to: '/' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' },
        ], 
    }),
    mounted() {
      this.$store.dispatch('getTasks')  
    },
    components: {
     'snackbar': require('@/components/Shared/Snackbar.vue').default
    }  
  }
</script>

<style>
  @media screen and (min-width: 992px) {
    .allItems {
      max-width: 90%;
  }
}
  @media screen and (max-width: 542px) {
    .textItems {
      margin-right: 12px;
  }
}
</style>

