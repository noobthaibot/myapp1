<template>
  <div class="header">
    <button class="button" @click="showLogDialog">Войти</button>
    <button class="button reg" @click="showRegDialog">Регистрация</button>
    <my-dialog v-if="isDiagloShown" @close="dialogClose">
      <template #body>
        <!-- <RegistrationForm v-if="dialogType === 'reg'" />
        <LoginForm v-else/> -->
        <component :is="componentName" />
      </template>
    </my-dialog>
  </div>
</template>
<script>
import RegistrationForm from './RegistrationForm.vue'
import LoginForm from './LoginForm.vue'
import MyDialog from './ui/MyDialog.vue'
export default {
  components: { MyDialog, RegistrationForm, LoginForm },
  data () {
    return {
      isDiagloShown: false,
      dialogType: '',
      componentName: ''
    }
  },
  methods: {
    showRegDialog () {
      this.isDiagloShown = true
      this.dialogType = 'reg'
      this.componentName = RegistrationForm
    },
    showLogDialog () {
      this.isDiagloShown = true
      this.dialogType = 'log'
      this.componentName = LoginForm
    },
    dialogClose () {
      this.isDiagloShown = false
    }
  }
}
</script>
<style>
.button {
  position: absolute;
  left: 30%;
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
}

.button:hover {
  opacity: 1;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.reg {
  margin-left: 130px;
}
</style>
