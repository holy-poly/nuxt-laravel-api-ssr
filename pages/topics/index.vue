<template>
	<div class="container col-md-5 mt-4">
		<h2>Latest Topics</h2>
		<div v-for="(topic, index) in topics" :key="index" class="bg-light mt-5 mb-5 p-3">
			<h4>{{ topic.title }}</h4>
			<!-- <small class="text-muted">{{ topic.created_at }} by {{ topic.user.name }}</small> -->
			<div v-for="(content, index) in topic.posts" :key="index" class="content ml-2">
        {{ content.body }}
        <br>
        <small class="text-muted">{{ content.created_at }} by {{ content.user.name }}</small>
      </div>
		</div>

    <nav>
      <ul class="pagination justify-content-center">
        <li v-for="(key, value) in links" :key="value" class="page-item">
          <a @click="loadMore(key)" href="#" class="page-link">{{ value }}</a>
        </li>
      </ul>
    </nav>
		<!-- <pre>{{ topics }}</pre> -->
	</div>

</template>

<script>
export default {
	data() {
		return {
			topics: [],
      links: []
		}
	},
	async asyncData({$axios}) {
		let {data, links} = await $axios.$get('/topics')
		console.log(links)
		return {
			topics: data,
      links: links
		}
  },
  methods: {
    async loadMore(key) {
      // console.log(key)
      let {data} = await this.$axios.$get(key)
      return this.topics = {...this.topics, ...data}
    }
  }
}
</script>

<style scoped>
.content {
  border-left: 10px solid white;
  padding: 0 10px;
}
</style>

