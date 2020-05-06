<template lang="pug">
  .skill.d-flex.justify-center.align-center(style="height: calc(100vh - 54px);")
    v-col(cols=12 md=10 lg=8)
      .skill-set.display-2.font-weight-bold.mb-12 My SkillSet
      v-row.justify-center.align-center
        v-col(cols=1 v-for='item in skills.firstRow', :key="item.alt")
          img.skill-icon(:src="item.svg", :alt="item.alt")
      v-row.justify-center.align-center
        v-col(cols=1 v-for='item in skills.secondRow', :key="item.alt")
          img.skill-icon(:src="item.svg", :alt="item.alt")
</template>

<script lang="ts">
import Vue from 'vue'
import html5Svg from '~/assets/svg/html5-original.svg'
import css3Svg from '~/assets/svg/css3-original.svg'
import sassSvg from '~/assets/svg/sass-original.svg'
import jsSvg from '~/assets/svg/javascript-original.svg'
import tsSvg from '~/assets/svg/typescript-original.svg'
import vueSvg from '~/assets/svg/vuejs-original.svg'
import nuxtSvg from '~/assets/svg/nuxt-white.svg'
import nodeSvg from '~/assets/svg/nodejs-original-wordmark.svg'
import pythonSvg from '~/assets/svg/python-original.svg'
import awsSvg from '~/assets/svg/aws-2.svg'
import firebaseSvg from '~/assets/svg/firebase-1.svg'

const skills = {
  firstRow: [
    { svg: html5Svg, alt: 'html5' },
    { svg: css3Svg, alt: 'css3' },
    { svg: sassSvg, alt: 'sass' },
    { svg: jsSvg, alt: 'javascript' },
    { svg: tsSvg, alt: 'typescript' },
    { svg: vueSvg, alt: 'vuejs' },
    { svg: nuxtSvg, alt: 'nuxt' },
    { svg: nodeSvg, alt: 'nodejs' },
    { svg: pythonSvg, alt: 'python' }
  ],
  secondRow: [
    { svg: awsSvg, alt: 'aws' },
    { svg: firebaseSvg, alt: 'firebase' }
  ]
}

export default Vue.extend({
  data() {
    return { skills }
  }
})
</script>

<style lang="scss" scoped>
.skill {
  .title-text {
    font-size: 2.5rem;
  }
  .skill-icon {
    width: 100%;
  }
}
</style>
