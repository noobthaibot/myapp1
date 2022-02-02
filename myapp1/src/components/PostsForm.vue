<template>
  <div class="container-item">
    <div class="news-btn-container">
      <h3 class="post-title">{{ title }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Open</button>
    </div>
    <div class="news-area" v-if="isOpen">
      <img :src="image" alt="">
      <p class="post-text">{{text}}</p>
      <button @click="doDelete(idx)" class="detele-btn">Удалить пост</button>
      <button class="edit-btn">Редактировать пост</button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: String,
    id: Number,
    image: Object
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    doDelete (idx) {
      console.log(idx)
      this.$store.state.posts.splice(idx, 1)
    }
  }
}
</script>

<style scoped>
.news-btn-container {
  display: flex;
  justify-content: space-between;
}
.btn,
.detele-btn {
    background-color: #8590f083;
    border: none;
    color: rgb(17, 39, 30);
    padding: 12px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    margin-top: 25px;
    border-radius: 10px;
    margin-right: 50px;
}
.btn:hover,
.detele-btn:hover {
  opacity: 1;
}

.btn:hover span {
  padding-right: 25px;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}
p,h3 {
  padding: 20px;
}
</style>
