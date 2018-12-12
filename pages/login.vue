<template>
  <div class="container col-md-3 mt-4">
    <h2 class="text-center">Login to your account!</h2>
    <form class="mt-4" @submit.prevent="submit">
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control" placeholder="Enter email" autofocus>
        <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Enter Password">
        <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Login</button>
      <br>
      <p class="text-center">Don't have an account? <nuxt-link to="/register">Register here</nuxt-link></p>
    </form>
  </div>
</template>

<script>
export default {
  middleware: [
    'guest'
  ],
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      // Send login credential
      await this.$auth.loginWith('local', {
        data: this.form
      })

      // Redirect user to authenticated page if user is authenticated or to profile page
      this.$router.push({
        path: this.$route.query.redirect || '/profile'
      })
    }
  }
}
</script>

