<template>
  <v-app>
    <app-bar></app-bar>
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
import AppBar from '@/components/AppBar.vue'

const states = {
  // blackoutCurtain: false,
  ripple: false,
  x: 0,
  y: 0
}

export default Vue.extend({
  components: { AppBar },
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
    height: 100vh;
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
