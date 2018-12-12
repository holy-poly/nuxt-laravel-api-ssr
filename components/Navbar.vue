<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link to="/" class="navbar-brand">
      <img src="/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="Nuxt Frontend">
      Nuxt Frontend
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
        </li>
      </ul>

      <template v-if="!authenticated">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
          </li>
        </ul>
      </template>

      <template v-if="authenticated">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/profile" class="nav-link">{{ user.name }}</nuxt-link>
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link" style="cursor: pointer;">Logout</a >
          </li>
        </ul>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

