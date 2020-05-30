<template>
  <v-app>
    <v-card height="54px" flat tile>
      <v-app-bar
        class="px-6"
        color="#121212"
        height="54px"
        prominent
        dense
        absolute
        elevate-on-scroll
        scroll-target=".main-content"
      >
        <v-toolbar-items class="hidden-sm-and-down">
          <nuxt-link
            v-for="item in toolbarItems"
            :key="item.text"
            :to="item.link"
            class="header-link mx-2"
          >
            <div
              class="d-flex align-center link-content headline px-3"
              :class="{ underline: $route.path === item.link }"
            >
              <v-icon left>{{ 'mdi-' + item.icon }}</v-icon>
              <div class="text">{{ item.text }}</div>
            </div>
          </nuxt-link>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <a
            class="header-icon mr-5"
            href="https://twitter.com/is_ryo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon>mdi-twitter</v-icon>
          </a>
          <a
            class="header-icon mr-5"
            href="https://github.com/ryo-is"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon>mdi-github</v-icon>
          </a>
          <a
            class="header-icon mr-5"
            href="mailto:ryosuke.izumi62@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon>mdi-email</v-icon>
          </a>
        </v-toolbar-items>
      </v-app-bar>
    </v-card>
    <v-content class="main-content overflow-y-auto">
      <div class="content-wrapper">
        <transition appear name="page-transition">
          <nuxt />
        </transition>
      </div>
      <div class="blackout-curtain wrapper">
        <transition-group
          appear
          name="blackout-curtain"
          @after-enter="blackoutCurtainAfterEnter"
        >
          <div
            v-for="n of 10"
            v-show="blackoutCurtain"
            :key="n"
            class="curtain-bar"
            :style="{ top: (n - 1) * 10 + '%' }"
            :data-index="n"
          />
        </transition-group>
        <transition-group
          appear
          name="blackout-curtain-after"
          @after-enter="blackoutCurtainAfterEnter"
        >
          <div
            v-for="n of 10"
            v-show="blackoutCurtain"
            :key="n"
            class="curtain-bar"
            :style="{ top: (n - 1) * 10 + 5 + '%' }"
            :data-index="n"
          />
        </transition-group>
      </div>
    </v-content>
  </v-app>
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
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

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
  font-family: 'Righteous', 'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    'メイリオ', Meiryo, 'MS Pゴシック', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .header-icon {
    padding-top: 9px;
    text-decoration: none;
  }

  .header-link {
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
