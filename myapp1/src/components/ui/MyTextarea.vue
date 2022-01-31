<template>
  <div class="input-margin">
    <div class="input-container">
      <label for="textarea">{{label}}</label>
      <input id="textarea" v-model="s" type="textarea" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTextarea',
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
  align-items: center;
  flex-direction: column;
}
input {
  width: 600px;
  height: 200px;
}
.input-margin {
  margin-bottom: 10px;
}
</style>
