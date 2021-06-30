<template>
  <div>
    <!-- Insert your components here -->
    <ExampleComponent></ExampleComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExampleComponent from "@/components/ExampleComponent.vue";

export default Vue.extend({
  name: 'Home',

  components: {
    ExampleComponent
  },
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#newTaskButton {
  bottom: 0;
  position: fixed;
  margin: 0 0 16px 16px;
}
</style>
