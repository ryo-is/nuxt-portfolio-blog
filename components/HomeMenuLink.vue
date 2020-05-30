<template>
  <nuxt-link class="menu-content ma-6" :to="toLink">
    <div
      class="link-wrapper d-flex align-center"
      @mouseover="hiddenArrow = false"
      @mouseleave="hiddenArrow = true"
    >
      <v-icon class="cursor display-1" :class="{ hidden: hiddenArrow }"
        >mdi-chevron-right</v-icon
      >
      <v-icon class="display-1 pr-3">{{ icon }}</v-icon>
      <div class="display-1">{{ text }}</div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    toLink: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hiddenArrow: true
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-content {
  color: #ffffff;
  text-decoration: none;
}

.cursor {
  animation: Flash 0.6s infinite;

  &.hidden {
    visibility: hidden;
  }
}

@keyframes Flash {
  50% {
    opacity: 0;
  }
}
</style>
