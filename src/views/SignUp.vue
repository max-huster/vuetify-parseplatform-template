<template>
  <div class="row pt-12 pl-1 pr-1 justify-center">
    <div class="col-xs-12 col-md-8 col-lg-4">
      <form @submit="OnSignUp">
        <fieldset :disabled="isLoading">
          <v-card elevation="2">
            <v-card-title>Sign Up</v-card-title>
            <v-card-text>
              <v-text-field
                  v-model="email"
                  label="E-Mail"
                  required
                  type="email"
                  name="email"
                  :disabled="isLoading"
              ></v-text-field>
              <v-text-field
                  v-model="username"
                  label="Username"
                  required
                  name="username"
                  :disabled="isLoading"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  label="Password"
                  required
                  name="password"
                  type="password"
                  :disabled="isLoading"
              ></v-text-field>
              <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  required
                  name="confirmPassword"
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
              >Sign Up
              </v-btn>
              <v-btn
                  elevation="2"
                  color="primary"
                  outlined
                  @click="$router.push({name: 'Login'})"
                  :disabled="isLoading"
              >Go to Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </fieldset>
      </form>
    </div>
  </div>

</template>

<script>
import Parse from "parse";

export default {
  name: "SignUp",
  data: () => {
    return {
      isLoading: false,
      errorMessage: null,
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  },
  methods: {
    async OnSignUp(event) {
      event.preventDefault();
      this.errorMessage = null;
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match!"
      }

      this.isLoading = true;
      let signUpResult;
      try {
        signUpResult = await Parse.User.signUp(this.username, this.password, {
          email: this.email
        });
      } catch (err) {
        console.error(err);
        this.errorMessage = err.message;
      }
      this.isLoading = false;
      if (!this.errorMessage && signUpResult.isCurrent()) {
        this.$router.push({name: "Home"});
      }

    }
  }
}
</script>

<style scoped>

</style>
