<template lang="pug">
  .home.d-flex.justify-center.align-center.flex-column(style="height: calc(100vh - 54px);")
    vue-typer.title-text.display-2(text="Wellcome to is_ryo's Portfolio!!!", :repeat='0')
    transition(name="upper-content")
      .menu.mt-12(v-if='menu')
        .display-1 menu
        home-menu-link(to-link="about", icon="mdi-information", text="About is_ryo")
        home-menu-link(to-link="skill", icon="mdi-xml", text="is_ryo's SkillSets")
        home-menu-link(to-link="account", icon="mdi-account-circle", text="is_ryo's Accounts")
</template>

<script lang="ts">
import Vue from 'vue'
import HomeMenuLink from '@/components/HomeMenuLink.vue'

export default Vue.extend({
  components: { HomeMenuLink },
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
}
</style>
