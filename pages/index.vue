<template lang="pug">
  .home.d-flex.justify-center.align-center.flex-column(style="height: calc(100vh - 54px);")
    vue-typer.title-text.display-2(text="Wellcome to is_ryo's Portfolio!!!", :repeat='0')
    transition(name="upper-content")
      .links.mt-12(v-if='links')
        .display-1 Links
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.links = true
    }, 2600)
  }
})
</script>

<style lang="scss">
.home {
  .title-text {
    font-size: 2.5rem;

    .custom.char {
      color: #ffffff;
    }
  }

  .upper-content {
    &-enter-active {
      transform: translate(0px, 0px);
      transition: transform 1s ease-in-out 0s, opacity 0.8s ease 0.2s;
    }

    &-enter {
      opacity: 0;
      transform: translateY(10vh) translateX(0);
    }
  }
}
</style>
