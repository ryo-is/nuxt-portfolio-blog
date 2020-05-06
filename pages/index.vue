<template lang="pug">
  .home
    .d-flex.justify-center.align-center(style="height: calc(100vh - 54px);")
      vue-typer.title-text.display-2(text="Wellcome to is_ryo's Portfolio!!!", :repeat='0')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.home {
  .title-text {
    font-size: 2.5rem;

    .custom.char {
      color: #ffffff;
    }
  }
}
</style>
