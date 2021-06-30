<template>
  <v-dialog
      v-model="dialog"
  >
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
            color="primary"
            @click="ConfirmClicked"
        >
          <v-icon>{{ confirmIcon }}</v-icon>
          {{ confirmText }}
        </v-btn>
        <v-btn
            outlined
            @click="CancelClicked"
        >
          <v-icon>{{ cancelIcon }}</v-icon>
          {{ cancelText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    "title": String,
    "message": String
  },

  data: function () {
    return {
      dialog: false,
      confirmIcon: "mdi-check",
      cancelIcon: "mdi-abort",
      confirmText: "Confirm",
      cancelText: "Cancel"
    }
  },
  methods: {
    show() {
      this.dialog = true;
    },
    ConfirmClicked() {
      this.dialog = false;
      this.$emit("confirm");
    },
    CancelClicked() {
      this.dialog = false;
      this.$emit("cancelled")
    }
  }
};

</script>

<style scoped>

</style>
