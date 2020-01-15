<template>
  <v-content class="login-container">
    <v-container
        class="fill-height"
        fluid
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
                color="primary"
                dark
                flat
            >
              <v-toolbar-title>Lorem ipsum dolor System</v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-text-field
                    label="用户名"
                    v-model="form.username"
                    :rules="rules.username"
                    name="login"
                    prepend-icon="person"
                    type="text"
                />

                <v-text-field
                    v-model="form.password"
                    :rules="rules.password"
                    label="密码"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" @click="handleLogin">登录</v-btn>
              <v-btn @click="resetValidation">重置</v-btn>
              <v-btn @click="$toast('hello')">test</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

  export default {
    name: "Login",
    props: {
      source: String
    },
    data() {
      return {
        valid: false,
        form: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            v => !!v || "必须输入用户名"
          ],
          password: [
            v => !!v || "必须输入密码"
          ]
        }
      };
    },
    methods: {
      async handleLogin() {
        if (this.$refs.form.validate()) {
          await this.$store.dispatch("login", this.form);
          this.$router.replace("/");
        }
      },
      resetValidation() {
        this.$refs.form.reset();
      }
    }
  };
</script>

<style scoped lang="scss" type="text/scss">

</style>
