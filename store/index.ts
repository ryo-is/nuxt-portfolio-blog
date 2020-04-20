import { ActionContext } from 'vuex'

type State = {
  token: string
  message: MessagesType
}

type MessagesType = {
  from: string
  notification: {
    title: string
    body: string
    icon: string
    click_action: string
  }
  collapse_key: string
}

export const state = () => ({
  token: '',
  message: {}
})

export const getters = {
  getToken(state: State) {
    return state.token
  },
  getMessages(state: State) {
    return state.message
  }
}

export const mutations = {
  SET_TOKEN(state: State, value: string) {
    state.token = value
  },
  ADD_MESSAGE(state: State, message: MessagesType) {
    state.message = message
  }
}

export const actions = {
  setToken({ commit }: ActionContext<State, any>, value: string) {
    commit('SET_TOKEN', value)
  },
  addMessage({ commit }: ActionContext<State, any>, message: MessagesType) {
    commit('ADD_MESSAGE', message)
  }
}
