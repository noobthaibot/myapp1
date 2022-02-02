<template>
<div><posts-form v-for="item in news"
      :key="item.id"
      :title="item.title"
      :image="item.image"
      :text="item.text"
      :id="item.id"
      :is-open="item.isOpen">
      </posts-form>
        <div class="counter">
      <div> Общее количество постов: {{ news.length }}</div>
    </div></div>
</template>

<script>
import PostsForm from '../components/PostsForm.vue'
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
    'posts-form': PostsForm
  }
}
</script>
<style scoped>
</style>
