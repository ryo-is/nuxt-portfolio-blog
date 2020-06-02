import { Context } from '@nuxt/types'

export default ({ app }: Context) => {
  app.router?.beforeEach((to, _from, next) => {
    if (to.name !== 'index') app.store?.dispatch('setBlackoutCurtain', true)
    next()
  })
}
