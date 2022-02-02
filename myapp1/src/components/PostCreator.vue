<template>
 <div>
    <my-input
    label="Название"
    :modelValue="title"
    @update="onUpdateTitle"
    v-model="title"
  />
  <my-textarea
    label="Введите текст"
    :modelValue="text"
    @update="onUpdateText"
    v-model="text"
  />
 </div>
</template>

<script>
import MyInput from './ui/MyInput.vue'
import MyTextarea from './ui/MyTextarea.vue'
export default {
  components: { MyInput, MyTextarea },
  data () {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    onUpdateTitle (modelValue) {
      this.title = modelValue
    },
    onUpdateText (modelValue) {
      this.text = modelValue
    }
  }
}
</script>
