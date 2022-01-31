<template>
  <div class="posts">
<div class="textarea">
      <h2>Редактор статей</h2>
    <my-input :modelValue="editPost.title" label="Заголовок статьи" placeholder="Введите название статьи" />
    <my-input :modelValue="editPost.author"
      label="Автор статьи, источник"
      placeholder="Введите автора статьи"
    />
    <my-textarea class="textarea-input" :modelValue="editPost.text " label="Текст статьи" placeholder="Введите текст статьи" />
    <div class="buttons">
      <button @click="onSave" type="submit" class="registerbtn save">
        Сохранить
      </button>
      <button @click="addPost" type="submit" class="registerbtn add">
        Добавить статью
      </button>
    </div>
</div>
    <div @postDelete="doDelete" class="post" v-for="post in postArray" :key="post.id">
      <h3>{{ post.title }}</h3>
      <span><i>Автор: {{ post.author }}</i></span
      >
      <p>{{ post.text }}</p>
      <div class="buttons">
        <button
          @click="onEdit"
          :id="post.id"
          type="submit"
          class="registerbtn edit"
        >
          Редактировать
        </button>
        <button
          @click="onDelete"
          :id="post.id"
          type="submit"
          class="registerbtn delete"
        >
          Удалить
        </button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import MyInput from '../components/ui/MyInput.vue'
import MyTextarea from '../components/ui/MyTextarea.vue'
export default {
  components: { MyInput, MyTextarea },
  data () {
    return {
      editPost: {},
      postArray: [
        {
          id: 1,
          title:
            'Как жителям Краматорска с апреля месяца приобрести в аптеке антибиотики',
          author: 'ReRerete',
          text: 'С апреля месяца жителям Краматорска предстоит приобретать антибиотики по новым правилам. С апреля 2022 года все зарегистрированные в Украине антибиотики будут отпускаться в аптеках только при наличии у пациента электронного рецепта'
        },
        {
          id: 2,
          title:
            'Противотанковые ракетные комплексы NLAW уже прибыли на Донбасс',
          author: 'Tyryryr',
          text: 'Идет подготовка стрелков-операторов.В Международном центре миротворчества и безопасности Национальной академии сухопутных войск имени гетмана Петра Сагайдачного на Львовщине прошли практические пуски противотанковых ракетных комплексов (ПТРК) NLAW, переданных Великобританией.'
        },
        {
          id: 3,
          title:
            'Как жителям Краматорска с апреля месяца приобрести в аптеке антибиотики',
          author: 'ReRerete',
          text: 'С апреля месяца жителям Краматорска предстоит приобретать антибиотики по новым правилам. С апреля 2022 года все зарегистрированные в Украине антибиотики будут отпускаться в аптеках только при наличии у пациента электронного рецепта'
        },
        {
          id: 4,
          title:
            'Как жителям Краматорска с апреля месяца приобрести в аптеке антибиотики',
          author: 'ReRerete',
          text: 'С апреля месяца жителям Краматорска предстоит приобретать антибиотики по новым правилам. С апреля 2022 года все зарегистрированные в Украине антибиотики будут отпускаться в аптеках только при наличии у пациента электронного рецепта'
        }
      ]
    }
  },
  methods: {
    onEdit (event) {
      const editPostId = event.target.id
      this.editPost = this.postArray.find((item) => item.id === editPostId)
      console.log(this.editPost)
    },
    onSave () {
      this.$emit()
    },
    addPost () {
      this.$emit()
    },
    onDelete () {
      this.$emit('postDelete', this.post.id)
    },
    doDelete (id) {
      this.postArray = this.postArray.filter(item => item.id !== id)
    }
  }
}
</script>

<style scoped>
form {
  margin: 25px;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.buttons {
  display: flex;
  justify-content: right;
  flex-direction: column;
}
.textarea {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap
}

.registerbtn {
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
  margin-top: 5px;
  border-radius: 10px;
}

.registerbtn:hover {
  opacity: 1;
}

hr {
  border: 1px solid #f1f1f1;
  /* margin-bottom: 25px; */
}
.posts {
  padding: 15px;
}
.post {
  padding: 0 15px;
}
</style>
