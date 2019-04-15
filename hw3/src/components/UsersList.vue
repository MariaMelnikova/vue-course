<template>
  <div>
    <p>{{title}}</p>

    <table
      class="table table-hover table-dark"
      style="height: auto; width: 1000px; margin-left: 150px;"
    >
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">firstName</th>
          <th scope="col">lastName</th>
          <th scope="col">company</th>
          <th scope="col">about</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <img style="height: 70px; width: auto" v-bind:src="user.picture">
          </td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.company}}</td>
          <td>{{user.about}}</td>
          <td>
            <router-link :to="{ params:{ userId: user.id }}"> Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
      <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "UsersList",
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
  },
  methods: {}
};
</script>

<style scoped>
</style>