<template>
  <v-app>
    <app-bar></app-bar>
    <v-content class="main-content overflow-y-auto">
      <div class="content-wrapper">
        <transition appear name="page-transition">
          <nuxt />
        </transition>
      </div>
    </v-content>
    <blackout-cartain></blackout-cartain>
    <blackout-circle></blackout-circle>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBar from '@/components/AppBar.vue'
import BlackoutCartain from '@/components/BlockoutCurain.vue'
import BlackoutCircle from '@/components/BlackoutCircle.vue'

export default Vue.extend({
  components: { AppBar, BlackoutCartain, BlackoutCircle }
})
</script>

<style lang="scss" scoped>
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

    .page-transition {
      @include pageTransition(0s);
    }
  }
}
</style>
