// Global validation handler
export const state = () => ({
  errors: {}
})

// Errors getters
export const getters = {
  errors(state) {
    return state.errors
  }
}

// Errors mutations
export const mutations = {
  SET_VALIDATION_ERRORS(state, errors) {
    state.errors = errors
  }
}

// Errors actions
export const actions = {
  setErrors({commit}, errors) {
    commit('SET_VALIDATION_ERRORS', errors)
  },
  clearErrors({commit}) {
    commit('SET_VALIDATION_ERRORS', {})
  }
}
