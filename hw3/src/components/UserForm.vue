<template>
  <div id="userForm">
    <div style="min-height: 30px;"></div>
    <b style="margin-left: 300px;">{{title}}</b>

    <form style="height: auto; width: 1000px; margin-left: 50px;">
      <div class="form-group">
        <label for="exampleFormControlInput1">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-bind:value="user.firstName"
          placeholder="First Name"
        >
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-bind:value="user.lastName"
          placeholder="Last Name"
        >
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Company</label>
        <input
          type="text"
          class="form-control"
          id="company"
          v-bind:value="user.company"
          placeholder="Company"
        >
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">About</label>
        <textarea class="form-control" id="about" v-bind:value="user.about"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserForm",

  data: function () {
                return {
                    title: "Edit form",
                    user: {}
                }
            },
            mounted() {
                    const axios = require('axios');
                axios
                    .get('http://localhost:3000/users/1')
                    .then(response => {(this.user = response.data); });
            },
};
</script>

<style  lang="scss" scoped>
@import "./node_modules/bootstrap/scss/bootstrap";
</style>