<template>
  <main>
    <div class="content-item">
      <h3 class="post-title">Появился список игр, совместимых со Steam Deck</h3>
      <div class="post-date">21.01.2022, 08:27</div>
      <app-news></app-news>
      <div class="content-area">
        <img
          class="post-image"
          src="./../assets/hardware.jpg"
          alt="post-image"
        />
        <p class="post-text"></p>
      </div>
      <hr />
    </div>
    <div class="content-item">
      <h3 class="post-title">Объявлена дата релиза WWE 2K22</h3>
      <div class="post-date">21.01.2022, 07:17</div>
      <div class="content-area">
        <img class="post-image" src="./../assets/wwe.jpg" alt="post-image" />
        <p class="post-text">
          Издательство 2K Sports объявило, что WWE 2K22 выйдет 11 марта.
          Разработчики также представили премьерный трейлер игры.
          <br /><br />Разработчики обещают «свежий геймплей», «ошеломительную
          графику» и новый режим. Однако чем именно новая часть серии будет
          отличаться от предыдущих, пока неизвестно.<br /><br />Релиз прошлой
          серии игры — WWE 2K20 — состоялся в октябре 2019 года. Тайтл вышел на
          ПК, PlayStation 4 и Xbox One. Пользователи персональных компьютеров и
          критики очень низко оценили игру — 1,5 балла из 10 от геймеров и 43
          балла из 100 от критиков соответственно. Из-за этого руководство 2K
          решило сделать перерыв и выделить на производство WWE 2K22 в два раза
          больше времени.
        </p>
      </div>
      <hr />
    </div>
    <div class="content-item">
      <h3 class="post-title">Инсайдер: новая Need for Speed выйдет осенью</h3>
      <div class="post-date">21.01.2022, 06:38</div>
      <div class="content-area">
        <img class="post-image" src="./../assets/nfs.jpg" alt="post-image" />
        <p class="post-text">
          Издательство Electronic Arts и студия Criterion Games планируют
          выпустить новую часть серии Need for Speed в сентябре-октябре 2022
          года. Об этом сообщил инсайдер Том Хендресон.<br /><br />
          В марте 2021 года глава студий Electronic Arts Лора Мили сообщила о
          заморозке производства новой Need for Speed. Студии пришлось
          приостановить работу над гоночной игрой, чтобы помочь DICE с
          многопользовательским шутером Battlefield 2042. <br /><br />Ранее
          энтузиаст из России выпустил фанатский трейлер неофициального ремейка
          Need for Speed Underground 2. В нем продемонстрирован заезд на трассе
          «Маяк» с улучшенной графикой. Ролик вышел на канале ODONATA CINEMA на
          YouTube
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import AppNews from '../components/AppNews.vue'
export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        'Появился список игр, совместимых со Steam Decks',
        'Lol kek cheburek'
      ]
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>
<style scoped>
</style>
