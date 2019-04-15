<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/">Home</router-link>|
    <router-link to="/usersList">UsersList</router-link>
    <!-- <UsersList v-bind:users="users"/> -->

    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import UsersList from "./components/UsersList.vue";

export default {
  name: "app",
  components: {
    Home,
    UsersList
  },
  data: function() {
    return {
      title: "Users:",
      buttonText: "Show users",
      users: []
    };
  },
  mounted() {
    const axios = require("axios");

    axios.get("http://localhost:3000/users").then(response => {
      this.users = response.data;
    });
  }
};
</script>

<style lang="scss">
@import "./node_modules/bootstrap/scss/bootstrap";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
