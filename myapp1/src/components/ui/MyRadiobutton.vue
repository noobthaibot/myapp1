<template>
  <label ><b>{{ label }}</b></label>
    <div id="select-country">
      <input type="radio" id="male" value="Мужской" v-model="pick" />
      <label for="male">Мужской</label>
      <input type="radio" id="female" value="Женский" v-model="pick" />
      <label for="female">Женский</label>
      <input type="radio" id="other" value="Другой" v-model="pick" />
      <label for="other">Другой</label>
    </div>
</template>

<script>
export default {
  name: 'MyRadiobutton',
  props: {
    modelValue: {
      type: Boolean,
      default: false
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
#select-country{
  display: flex;
}
.country,
.mail {
  margin-top: 15px;
}

label {
  display: block;
}
.container {
  padding: 16px;
}

input[type="text"],
input[type="password"] {
  width: 800px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: rgb(76, 175, 80, 0.9);
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: dodgerblue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
