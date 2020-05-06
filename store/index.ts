import { ActionTree, MutationTree } from 'vuex'

type StateType = {
  blackoutCurtain: boolean
}

type RootState = StateType

export const state = (): StateType => ({
  blackoutCurtain: false
})

export const actions: ActionTree<RootState, StateType> = {
  setBlackoutCurtain({ commit }, value: boolean) {
    commit('setBlackoutCurtain', value)
  }
}

export const mutations: MutationTree<StateType> = {
  setBlackoutCurtain(state, value: boolean) {
    state.blackoutCurtain = value
  }
}
