<template>
  <div class="row pt-12 pl-3 pr-3 justify-center">
    <div class="col-xs-12 col-md-8 col-lg-4">
      <form @submit="OnLogin">
        <v-card elevation="2">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-text-field
                v-model="username"
                label="Username"
                required
                :disabled="isLoading"
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                required
                type="password"
                :disabled="isLoading"
            ></v-text-field>


            <v-alert v-if="errorMessage"
                     border="top"
                     type="error"
            >{{ errorMessage }}
            </v-alert>

          </v-card-text>

          <v-card-actions>
            <v-btn
                elevation="2"
                color="primary"
                type="submit"
                :disabled="isLoading"
            >
              <v-progress-circular
                  indeterminate
                  color="primary"
                  v-if="isLoading"
              ></v-progress-circular>
              Login
            </v-btn>


            <v-btn
                elevation="2"
                color="primary"
                outlined
                @click="$router.push({name: 'SignUp'})"
                :disabled="isLoading"
            >Sign up
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text normal disabled>
              I forgot my Password
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </div>
  </div>

</template>

<script>
import Parse from "parse"

export default {
  name: "Login.vue",
  data: () => {
    return {
      username: "",
      password: "",
      errorMessage: null,
      isLoading: false
    }
  },
  methods: {
    async OnLogin(event) {
      event.preventDefault();
      this.errorMessage = null;
      this.isLoading = true;
      try {
        const loginResult = await Parse.User.logIn(this.username, this.password);

      } catch (e) {
        console.error(e);
        this.errorMessage = e.message;
      } finally {
        this.isLoading = false;
      }

      if (!this.errorMessage) {
        this.$router.push({
          name: "Home"
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
