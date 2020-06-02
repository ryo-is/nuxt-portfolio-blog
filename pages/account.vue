<template>
  <div class="account d-flex justify-center align-center">
    <v-col :cols="12">
      <div class="display-2 font-weight-bold mb-12">Accounts</div>
      <v-row class="justify-center align-center">
        <v-col class="mx-6" :cols="1">
          <a
            href="https://twitter.com/is_ryo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icon"
              src="../assets/svg/twitter-original.svg"
              alt="twitter"
            />
          </a>
        </v-col>
        <v-col class="mx-6" :cols="1">
          <a
            href="https://github.com/ryo-is"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icon"
              src="../assets/svg/github-original.svg"
              alt="github"
            /> </a
        ></v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.account {
  height: 100vh;

  .icon {
    width: 100%;
  }
}
</style>
