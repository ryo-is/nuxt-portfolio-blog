<template lang="pug">
  .home.d-flex.justify-center.align-center.flex-column(style="height: calc(100vh - 54px);")
    vue-typer.title-text.display-2(text="Wellcome to is_ryo's Portfolio!!!", :repeat='0')
    transition(name="upper-content")
      .menu.mt-12(v-if='menu')
        .display-1 menu
        nuxt-link.d-flex.menu-content.ma-6(to='about' @click='linkPage')
          v-icon.display-1.pr-3 mdi-information
          .display-1 About is_ryo
        nuxt-link.d-flex.menu-content.ma-6(to='skill')
          v-icon.display-1.pr-3 mdi-xml
          .display-1 is_ryo's SkillSets
        nuxt-link.d-flex.menu-content.ma-6(to='account')
          v-icon.display-1.pr-3 mdi-account-circle
          .display-1 is_ryo's Accounts
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      menu: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.menu = true
    }, 2600)
  },
  methods: {
    linkPage() {
      console.log('link')
    }
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
      transition: transform 0.8s ease-in-out 0s, opacity 0.6s ease 0.2s;
    }

    &-enter {
      opacity: 0;
      transform: translateY(10vh) translateX(0);
    }
  }

  .menu-content {
    color: #ffffff;
    text-decoration: none;
  }
}
</style>
