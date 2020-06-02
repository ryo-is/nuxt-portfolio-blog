<template>
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
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
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
</style>
