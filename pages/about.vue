<template>
  <div class="about-page d-flex flex-column justify-center align-center">
    <img class="photo" src="../assets/my_photo.png" alt="my_photo" />
    <div class="name text-h3 text-center font-weight-bold mt-10">
      Ryosuke Izumi
    </div>
    <div class="job text-h4 text-center mt-6">Frontend / WebApplication</div>
    <div class="likes text-h4 text-center mt-6">
      Vue (Nuxt) / TypeScript / AWS
    </div>
    <div class="community text-h4 text-center mt-6">v-kansai / kansai.ts</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.about-page {
  height: 100vh;

  .photo {
    border-radius: 50%;
    max-width: 480px;
    min-width: 320px;
    width: 20vw;
  }
}
</style>
