<template>
<registration-form></registration-form>
<login-form></login-form>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
export default {
  components: { RegistrationForm, LoginForm },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped
MyInput>
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}
</style>
