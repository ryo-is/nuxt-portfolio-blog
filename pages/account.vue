<template lang="pug">
  .account.d-flex.justify-center.align-center(style="height: calc(100vh - 54px);")
    v-col(cols=12)
      .display-2.font-weight-bold.mb-12 Accounts
      v-row.justify-center.align-center
        v-col.mx-6(cols=1)
          a(href="https://twitter.com/is_ryo" target="_blank" rel="noopener noreferrer")
            img.icon(src="../assets/twitter-original.svg", alt="twitter")
        v-col.mx-6(cols=1)
          a(href="https://github.com/ryo-is" target="_blank" rel="noopener noreferrer")
            img.icon(src="../assets/github-original.svg", alt="github")
        v-col.mx-6(cols=1)
          a(href="mailto:ryosuke.izumi62@gmail.com" target="_blank" rel="noopener noreferrer")
            img.icon(src="../assets/gmail-icon-2.svg", alt="github")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.account {
  .icon {
    width: 100%;
  }
}
</style>
