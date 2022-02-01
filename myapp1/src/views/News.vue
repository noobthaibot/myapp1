<template>
<div><app-news v-for="item in news"
      :key="item.id"
      :title="item.title"
      :image="item.image"
      :text="item.text"
      :id="item.id"
      :is-open="item.isOpen"></app-news></div>
</template>

<script>
import AppNews from '../components/AppNews.vue'
export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false
    }
  },
  computed: {
    news () {
      return this.$store.state.posts
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>
<style scoped>
</style>
