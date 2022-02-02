<template>
<div>
  <posts-form v-for="item in news"
      :key="item.id"
      :title="item.title"
      :image="item.image"
      :text="item.text"
      :id="item.id"
      :is-open="item.isOpen">
      </posts-form>
        <div class="counter">
      <div v-if="$store.state.posts.length !== 0"> Общее количество постов: {{ news.length }}</div>
      <div v-show="$store.state.posts.length === 0">
        <div>Постов нет,создайте новый</div>
        <post-creator></post-creator>
        <button @click="submitPost">Создать</button>
    </div>
  </div>
   </div>
</template>

<script>
import PostsForm from '../components/PostsForm.vue'
import PostCreator from '../components/PostCreator.vue'
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
    'posts-form': PostsForm,
    'post-creator': PostCreator
  },
  methods: {
    submitPost (modelValue) {
      this.$store.state.posts.push(modelValue)
    }
  }
}
</script>
<style scoped>
</style>
