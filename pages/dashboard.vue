<template>
	<div class="container col-md-3 mt-4">
    <h2 class="text-center">Create a new topic</h2>
    <form class="mt-4" @submit.prevent="create">
      <div class="form-group">
        <label>Topic title</label>
        <input v-model.trim="form.title" type="text" class="form-control" placeholder="Enter topic title" autofocus>
        <small v-if="errors.title" class="form-text text-danger">{{ errors.title[0] }}</small>
      </div>
      <div class="form-group">
				<label>Topic body</label>
				<textarea v-model="form.body" class="form-control" rows="5" placeholder="Enter topic body"></textarea>
				<small v-if="errors.body" class="form-text text-danger">{{ errors.body[0] }}</small>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Create</button>
    </form>
  </div>
</template>

<script>
export default {
	middleware: ['auth'],
	data() {
		return {
			form: {
				title: '',
				body: ''
			}
		}
	},
	methods: {
		async create() {
			await this.$axios.$post('/topics', this.form)
			this.$router.push('/')
		}
	}
}
</script>

