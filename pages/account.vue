<template lang="pug">
  .account
    .d-flex.justify-center.align-center.flex-column(style="height: calc(100vh - 54px);")
      a.d-flex.title-text(href="https://twitter.com/is_ryo" target="_blank" rel="noopener noreferrer")
        v-icon mdi-twitter
        .text.ml-4 @is_ryo
      a.d-flex.title-text(href="https://github.com/ryo-is" target="_blank" rel="noopener noreferrer")
        v-icon mdi-github
        .text.ml-4 @ryo-is
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.account {
  .page-title {
    font-size: 4rem;
  }

  .title-text {
    font-size: 2.5rem;
    text-decoration: none;

    i {
      font-size: 2.5rem;
    }
  }
}
</style>
