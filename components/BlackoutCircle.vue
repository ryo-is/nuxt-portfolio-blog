<template>
  <div class="circle-wrapper d-flex justify-center align-center">
    <transition appear name="circle" @after-enter="blackoutCircleAfterEnter">
      <!-- <div
        class="circle"
        :class="{ open: toggle, close: !toggle }"
        @click="toggle = !toggle"
      ></div> -->
      <div v-if="blackoutCircle" class="circle"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  data() {
    return {
      toggle: false
    }
  },
  computed: {
    ...mapState(['blackoutCircle'])
  },
  methods: {
    ...mapActions(['setBlackoutCircle']),
    blackoutCircleAfterEnter() {
      this.setBlackoutCircle(false)
    }
  }
})
</script>

<style lang="scss" scoped>
.circle-wrapper {
  height: 100vh;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2;
}

.circle {
  background-color: #080808;
  border-radius: 50%;
  display: block;
  height: 10px;
  width: 10px;
  transform: scale(0);

  &-enter {
    opacity: 0;
  }

  &-enter-active {
    transition: transform 0.5s ease-in-out;
  }

  &-enter-to {
    transform: scale(250);
  }

  &-leave-active {
    transition: transform 0.5s ease-in-out;
  }

  &-leave-to {
    transform: scale(0);
  }

  &.open {
    transform: scale(100);
    opacity: 0.2;
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  }

  &.close {
    transform: scale(1);
    opacity: 1;
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  }
}
</style>
