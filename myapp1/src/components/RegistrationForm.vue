<template>
    <div>
        <my-input />
        <div>
            <button @click="doRegistration">Регистрация</button>
        </div>
    </div>
</template>
<script>
import MyInput from './ui/MyInput.vue'
export default {
  components: { MyInput },
  data () {
    return {
      name: '',
      password: '',
      secondPassword: ''
    }
  },
  methods: {
    doRegistration () {},
    onUpdate (modelValue) {
      this.name = modelValue
    }
  }
}
</script>
