<template>
  <div class="container col-md-3 mt-4">
    <h2 class="text-center">Register an account, it's free!</h2>
    <form class="mt-4" @submit.prevent="submit">
      <div class="form-group">
        <label>Full Name</label>
        <input v-model.trim="form.name" type="text" class="form-control" placeholder="Enter your name" autofocus>
        <small class="form-text text-danger">Fullname error description here.</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control" placeholder="Enter email">
        <small class="form-text text-danger">Email error description here.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Enter Password">
        <small class="form-text text-danger">Password error description here.</small>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Register</button>
      <br>
      <p class="text-center">Already have an account? <nuxt-link to="/login">Login here</nuxt-link></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async submit() {
      // Send register form
      await this.$axios.$post('register', this.form)

      // Logging in user after finish sending register form
      await this.$auth.loginWith('local', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })

      // Redirect user to home
      this.$router.push('/')
    }
  }
}
</script>

