export const getters = {
  // Authenticated getters
  authenticated(state) {
    return state.loggedIn
  },

  // User getters
  user(state) {
    return state.user
  }
}
