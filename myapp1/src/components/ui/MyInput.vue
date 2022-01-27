<template>
  <div>
    <div>
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
