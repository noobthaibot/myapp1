<template>
  <div class="card">
    <h3>{{ item }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Open</button>
    <p v-if="isOpen">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, tempora?
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: 'Item string',
      isOpen: false
    }
  }
}
</script>
