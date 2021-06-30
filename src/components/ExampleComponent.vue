<template>
  <v-container>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.attribute3 }}
      </li>
    </ul>
    <v-btn
        id="fabPlus"
        elevation="2"
        fab
        color="primary"
        @click="fabPlusClicked"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script lang="ts">

import {getModule} from "vuex-module-decorators";
import Vue from "vue";
import Component from "vue-class-component";
import {YourObjectStore} from "@/store/modules/YourObjectStore";
import {YourObject} from "@/model/YourObject";
import * as faker from "faker"
@Component({
  computed: {
    items() {
      return getModule(YourObjectStore).allItems;
    }
  },
  components: {}
})
export default class ExampleComponent extends Vue {
  async fabPlusClicked(){
    // create object
    const newObj = new YourObject();
    newObj.attribute3 = faker.commerce.product();
    // save to database
    await newObj.save();
  }
}
</script>

<style scoped lang="scss">
#fabPlus {
  bottom: 0;
  position: fixed;
  margin: 0 0 16px 16px;
}
</style>
