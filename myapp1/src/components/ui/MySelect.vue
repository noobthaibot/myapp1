<template>
  <label><b>{{ label }}</b></label>
    <div id="v-model-select" class="select">
  <select v-model="pick">
    <option disabled value="">Выберите страну проживания</option>
    <option>Украина</option>
    <option>Россия</option>
    <option>Беларусь</option>
  </select>
  <span>Выбрано: {{ selected }}</span>
</div>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  watch: {
    modelValue: {
      handler () {
        this.pick = this.modelValue
      },
      immediate: true
    },
    pick () {
      this.$emit('update', this.pick)
    }
  },
  data () {
    return {
      pick: ''
    }
  }
}
</script>

<style scoped>
.select {
    font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
