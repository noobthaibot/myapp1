<template>
    <div class="reg-container">
        <my-input label="Введите логин" :modelValue="name" @update="onUpdate" v-model="name"/>
        <my-input label="Введите пароль" :modelValue="password" @update="onUpdatePass" v-model="password"/>
        <my-input label="Повторите пароль" :modelValue="secondPassword" @update="onUpdateSecondPass" v-model="secondPassword"/>
        <my-radiobutton label="Выберите пол" :modelValue="gender" @update="onGenderSelect" v-model="gender"/>
        <my-select label="Выберите страну" :modelValue="country" @update="onCountrySelect" v-model="country"/>
        <div class="reg-button">
            <button class="btn" @click="doRegistration">Регистрация</button>
        </div>
    </div>
</template>
<script>
import MyInput from './ui/MyInput.vue'
import MyRadiobutton from './ui/MyRadiobutton.vue'
export default {
  components: { MyInput, MyRadiobutton },
  data () {
    return {
      name: '',
      password: '',
      secondPassword: '',
      gender: '',
      country: ''
    }
  },
  methods: {
    doRegistration () {
      alert('Вы успешно зарегистритовались!')
    },
    onUpdate (modelValue) {
      this.name = modelValue
    },
    onUpdatePass (modelValue) {
      this.password = modelValue
    },
    onUpdateSecondPass (modelValue) {
      this.secondPassword = modelValue
    },
    onGenderSelect (modelValue) {
      this.gender = modelValue
    },
    onCountrySelect (modelValue) {
      this.country = modelValue
    }
  }
}
</script>
<style scoped>
.reg-container {
  display: flex;
  flex-direction: column;
}
.reg-button {
  margin-top: 20px;
}

.btn {
    background-color: #0b0e2783;
    border: none;
    color: rgb(2, 2, 2);
    padding: 12px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.8;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    margin-top: 25px;
    border-radius: 10px;
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
</style>
