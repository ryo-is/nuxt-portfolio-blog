<template>
  <div class="home d-flex justify-center align-center flex-column">
    <div class="text-h3">Wellcome to is_ryo's Portfolio!!!</div>
    <div class="menu mt-12">
      <div class="text-h4">menu</div>
      <home-menu-link
        to-link="about"
        icon="mdi-information"
        text="About is_ryo"
      />
      <home-menu-link
        to-link="skill"
        icon="mdi-xml"
        text="is_ryo's SkillSets"
      />
      <home-menu-link
        to-link="account"
        icon="mdi-account-circle"
        text="is_ryo's Accounts"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeMenuLink from '@/components/HomeMenuLink.vue'

export default Vue.extend({
  components: { HomeMenuLink },
  methods: {
    linkPage() {
      console.log('link')
    }
  }
})
</script>

<style lang="scss">
.home {
  height: 100vh;

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
