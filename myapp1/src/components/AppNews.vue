<template>
  <div class="container-item">
    <div class="news-btn-container">
      <h3 class="post-title">{{ title }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Open</button>
    </div>
    <p class="post-text" v-if="isOpen">
      {{text}}
    </p>
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
    id: Number
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.news-btn-container {
  display: flex;
  justify-content: space-between;
}
.btn {
    background-color: #8590f083;
    border: none;
    color: white;
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
.btn:hover {
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
