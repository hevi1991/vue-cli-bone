<template>
  <div class="home">
    <button @click="logout">
      <svg-icon icon-class='example'/>
      logout
    </button>
    <br>
    <br>
    {{logoutRes}}
    <br>
    <br>
    <button @click="getRequest">
      <svg-icon icon-class='example'/>
      getRequest
    </button>
    <br>
    <br>
    {{getRes}}
  </div>
</template>

<script>
  import { getRequest, login, logout } from "@/api/user";

  export default {
    name: "home",
    data() {
      return {
        loginRes: null,
        logoutRes: null,
        getRes: null
      };
    },
    created() {
    },
    methods: {
      async logout() {
        try {
          let { msg } = await this.$store.dispatch("logout");
          alert(msg);
          this.$router.replace("/login");
        } catch (e) {
          console.error(e);
        }
      },
      async getRequest() {
        let { data } = await getRequest();
        this.getRes = data;
      }
    }
  };
</script>
