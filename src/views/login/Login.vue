<template>
  <form @submit.prevent="handleLogin">
    <h2>Login</h2>
    <p>
      <label>Username
        <input type="text" alt="username" required v-model="form.username">
      </label>
    </p>
    <p>
      <label>Password
        <input type="password" alt="passwd" required v-model="form.password">
      </label>
    </p>
    <button type="submit">Sign in</button>
  </form>
</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: "",
          password: ""
        }
      };
    },
    methods: {
      async handleLogin() {
        try {
          await this.$store.dispatch("login", this.form);
          this.$router.replace("/");
        } catch (e) {
          alert(e);
        }
      }
    }
  };
</script>

<style scoped lang="scss" type="text/scss">

</style>
