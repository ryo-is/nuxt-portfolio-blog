import { ActionTree, MutationTree } from 'vuex'

type StateType = {
  blackoutCurtain: boolean
  blackoutCircle: boolean
}

type RootState = StateType

export const state = (): StateType => ({
  blackoutCurtain: false,
  blackoutCircle: false
})

export const actions: ActionTree<RootState, StateType> = {
  setBlackoutCurtain({ commit }, value: boolean) {
    commit('setBlackoutCurtain', value)
  },
  setBlackoutCircle({ commit }, value: boolean) {
    commit('setBlackoutCircle', value)
  }
}

export const mutations: MutationTree<StateType> = {
  setBlackoutCurtain(state, value: boolean) {
    state.blackoutCurtain = value
  },
  setBlackoutCircle(state, value: boolean) {
    state.blackoutCircle = value
  }
}
