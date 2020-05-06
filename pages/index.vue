<template lang="pug">
  .index
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    setTimeout(() => {
      this.$router.push('/home')
    }, 1000)
  }
})
</script>
