module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: 'babel-eslint' // via) https://typescript.nuxtjs.org/ja/guide/lint.html#%E8%A8%AD%E5%AE%9A
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-expressions': 'off',
    'camelcase': 'off'
  }
}
