<template>
  <div class="input-margin">
    <div class="input-container">
      <label for="name">{{label}}</label>
      <input id="name" v-model="s" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCustomInput',
  props: {
    modelValue: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Пустое поле'
    }
  },
  watch: {
    modelValue: {
      handler () {
        this.s = this.modelValue
      },
      immediate: true
    },
    s () {
      this.$emit('update', this.s)
    }
  },
  data () {
    return {
      s: ''
    }
  }
}
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.input-container input {
  height: 30px;
}
.input-margin {
  margin-bottom: 10px;
}
</style>
