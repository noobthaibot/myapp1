<template>
  <div>
    <div>
      <label for="name">Введите ваше имя</label>
      <input id="name" v-model="name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCustomInput',
  props: {
    label: {
      type: String,
      default: 'Пустое поле'
    }
  }
}
</script>
