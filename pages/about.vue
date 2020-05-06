<template lang="pug">
  .about-page.d-flex.flex-column.justify-center.align-center(style="height: calc(100vh - 54px);")
    img.photo(src="../assets/my_photo.png")
    .name.display-2.text-center.font-weight-bold.mt-10 Ryosuke Izumi
    .job.display-1.text-center.mt-6 WebApplication / IoT
    .likes.display-1.text-center.mt-6 AWS / Vue / TypeScript / Serverless
    .community.display-1.text-center.mt-6 v-kansai / kansai.ts

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.about-page {
  .photo {
    border-radius: 50%;
    max-width: 480px;
    min-width: 320px;
    width: 20vw;
  }
}
</style>
