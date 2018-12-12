// Getters for auth and user
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
