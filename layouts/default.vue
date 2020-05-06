<template lang="pug">
  v-app
    v-card(height="54px" flat tile)
      v-app-bar.px-6(
        color="#121212" height="54px"
        prominent dense absolute elevate-on-scroll scroll-target=".main-content"
      )
        v-toolbar-items.hidden-sm-and-down
          nuxt-link.headder-link.mx-2(v-for="item in toolbarItems", :key="item.text", :to="item.link")
            .d-flex.align-center.link-content.headline.px-3(:class="{'underline': $route.path === item.link}")
              v-icon(left) {{ 'mdi-' + item.icon }}
              .text {{ item.text }}
        v-spacer
        v-toolbar-items.hidden-sm-and-down
          a.header-icon.mr-5(href="https://twitter.com/is_ryo" target="_blank" rel="noopener noreferrer")
            v-icon mdi-twitter
          a.header-icon.mr-5(href="https://github.com/ryo-is" target="_blank" rel="noopener noreferrer")
            v-icon mdi-github
          a.header-icon(href="mailto:ryosuke.izumi62@gmail.com" target="_blank" rel="noopener noreferrer")
            v-icon mdi-email
    v-content.main-content.overflow-y-auto
      .content-wrapper
        transition(appear name="page-transition")
          nuxt
      .blackout-curtain.wrapper
        transition-group(appear name="blackout-curtain" @after-enter="blackoutCurtainAfterEnter")
          .curtain-bar(v-for="n of 10" :key="n" :data-index="n" v-if="blackoutCurtain" :style="{top: (n - 1) * 10 + '%'}")
        transition-group(appear name="blackout-curtain-after" @after-enter="blackoutCurtainAfterEnter")
          .curtain-bar(v-for="n of 10" :key="n" v-if="blackoutCurtain" :style="{top: (n - 1) * 10 + 5 + '%'}")
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

const toolbarItems = [
  { text: 'home', link: '/home', icon: 'home-variant' },
  { text: 'about', link: '/about', icon: 'information' },
  { text: 'skill', link: '/skill', icon: 'xml' },
  { text: 'acounts', link: '/account', icon: 'account-circle' }
]

const states = {
  toolbarItems,
  // blackoutCurtain: false,
  ripple: false,
  x: 0,
  y: 0
}

export default Vue.extend({
  data() {
    return states
  },
  computed: {
    ...mapState(['blackoutCurtain'])
  },
  methods: {
    ...mapActions(['setBlackoutCurtain']),
    blackoutCurtainAfterEnter() {
      this.setBlackoutCurtain(false)
    }
  }
})
</script>

<style lang="scss">
body {
  margin: 0;

  // スクロールバー非表示
  ::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
}

#app {
  font-family: 'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'MS Pゴシック', sans-serif;
  font-family: 'Kosugi Maru', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .header-icon {
    padding-top: 9px;
    text-decoration: none;
  }

  .headder-link {
    color: #ffffff;
    text-decoration: none;

    .link-content {
      height: 100%;

      &.underline {
        border-bottom: 2px solid;
      }
    }
  }

  .main-content {
    height: calc(100vh - 54px);
    position: relative;

    &::-webkit-scrollbar {
      width: 0px;
    }

    @mixin pageTransition($enterDelay: 0s) {
      &-enter-active,
      &-leave-active {
        transition: opacity 0s ease $enterDelay;
      }

      &-enter,
      &-leave-to {
        opacity: 0;
      }
    }

    @mixin blackoutCurtain($enterDelay: 0s) {
      @include pageTransition(0s);

      &-leave-active {
        transform: translate(0px, 0px);
        transition: transform 0.5s ease-in-out 0s;
      }

      &-leave-to {
        opacity: 1;
        transform: translateX(0) translateX(100vw);
      }
    }

    .page-transition {
      @include pageTransition(0s);
    }

    .blackout-curtain {
      @include blackoutCurtain(0s);
    }

    .blackout-curtain-after {
      @include blackoutCurtain(0s);

      &-leave-to {
        transform: translateX(-100vw) translateX(0vw);
      }
    }

    .wrapper {
      height: 100%;
      left: 0;
      pointer-events: none;
      top: 0;
      width: 100%;
    }

    .blackout-curtain {
      position: absolute;

      .curtain-bar {
        background-color: #080808;
        height: 5%;
        position: absolute;
        width: 100%;
      }
    }
  }
}
</style>
