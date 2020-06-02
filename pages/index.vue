<template>
  <div class="index d-flex justify-center align-center flex-column">
    <vue-typer
      class="title-text dispaly-2"
      text="Wellcome to is_ryo's Portfolio!!!"
      :repeat="0"
    ></vue-typer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    setTimeout(() => {
      this.$router.push('/home')
    }, 2700)
  }
})
</script>

<style lang="scss">
.index {
  height: 100vh;

  .title-text {
    font-size: 3.5rem;

    .custom.char {
      color: #ffffff;
    }
  }
}
</style>
