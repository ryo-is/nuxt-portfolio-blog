<template>
  <v-app-bar
    v-show="$route.path !== '/'"
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
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
const toolbarItems = [
  { text: 'home', link: '/home', icon: 'home-variant' },
  { text: 'about', link: '/about', icon: 'information' },
  { text: 'skill', link: '/skill', icon: 'xml' },
  { text: 'acounts', link: '/account', icon: 'account-circle' }
]

const states = { toolbarItems }

export default Vue.extend({
  data() {
    return states
  }
})
</script>

<style lang="scss" scoped>
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
</style>
