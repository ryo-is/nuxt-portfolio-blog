<template lang="pug">
  .skill.d-flex.justify-center.align-center(style="height: calc(100vh - 54px);")
    v-col(cols=12 md=10 lg=8)
      .skill-set.display-2.font-weight-bold.mb-12 My SkillSet
      //- .skill-set-title.display-1.font-weight-bold.mt-6.mb-4 AWS
      //- .skill-set-article.title 使い始めて4年程度。好きなサービスは Lambda / DynamoDB / AppSync あたり。
      //- .skill-set-title.display-1.font-weight-bold.mt-6.mb-4 HTML / CSS / JavaScript
      //- .skill-set-article.title 使い始めて5年程度。CSSアニメーションとかが好き。
      //- .skill-set-title.display-1.font-weight-bold.mt-6.mb-4 Pug / Sass(Scss) / TypeScript
      //- .skill-set-article.title 使い始めて3年程度。もう型のない世界には戻れない。
      //- .skill-set-title.display-1.font-weight-bold.mt-6.mb-4 Node.js
      //- .skill-set-article.title 使い始めて3年程度。サーバサイドの言語として使っています。<br>また Lambda のランタイム言語としてもよく使っています。JS のまま書いていたり TS で書いたりしています。
      //- .skill-set-title.display-1.font-weight-bold.mt-6.mb-4 Vue.js / Nuxt.js
      //- .skill-set-article.title 使い始めて2年程度。Webアプリケーションのフレームワークとして採用しています。<br>Vue を書くときは Pug / Scss / TypeScript で書いています。業務でも趣味でも使っています。
      //- .skill-set-title.display-1.font-weight-bold.mt-6.mb-4 Python
      //- .skill-set-article.title Lambdaで使ったり、IoTシステムで使うGWの中で使ったりしています。ただほんとにチョットカケルってレベル。
      v-row.justify-center.align-center
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/html5-original.svg", alt="html5")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/css3-original.svg", alt="css3")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/sass-original.svg", alt="sass")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/javascript-original.svg", alt="javascript")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/typescript-original.svg", alt="typescript")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/vuejs-original.svg", alt="vuejs")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/nuxt-white.svg", alt="nuxt")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/nodejs-original-wordmark.svg", alt="nodejs")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/python-original.svg", alt="python")
      v-row.justify-center.align-center
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/aws-2.svg", alt="aws")
        v-col(cols=1)
          img.skill-icon(src="../assets/svg/firebase-1.svg", alt="firebase")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
