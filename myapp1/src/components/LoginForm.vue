<template>
    <div>
        <my-input label="Введите логин" :modelValue="name" @update="onUpdate" v-model="name"/>
        <my-input label="Введите пароль" :modelValue="password" @update="onUpdatePass" v-model="password"/>
        <div>
            <button @click="doLogin">Войти</button>
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
      password: ''
    }
  },
  methods: {
    doLogin () {},
    onUpdate (modelValue) {
      this.name = modelValue
    },
    onUpdatePass (modelValue) {
      this.password = modelValue
    }
  }
}
</script>
