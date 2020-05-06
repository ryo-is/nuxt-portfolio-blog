import { Context } from '@nuxt/types'

export default ({ app }: Context) => {
  app.router?.beforeEach((_to, _from, next) => {
    app.store?.dispatch('setBlackoutCurtain', true)
    next()
  })
}
