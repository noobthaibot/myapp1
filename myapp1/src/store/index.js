import { createStore } from 'vuex'
import userStore from './user/index'

export default createStore({
  modules: {
    user: userStore
  },
  state () {
    return {
      posts: [{
        title: 'Появился список игр, совместимых со Steam Decks',
        text: 'Издательство 2K Sports объявило, что WWE 2K22 выйдет 11 марта.Разработчики также представили премьерный трейлер игры. Разработчики обещают «свежий геймплей», «ошеломительную графику» и новый режим. Однако чем именно новая часть серии будет отличаться от предыдущих, пока неизвестно. Релиз прошлой серии игры — WWE 2K20 — состоялся в октябре 2019 года. Тайтл вышел на ПК, PlayStation 4 и Xbox One. Пользователи персональных компьютеров и критики очень низко оценили игру — 1,5 балла из 10 от геймеров и 43 балла из 100 от критиков соответственно. Из-за этого руководство 2K решило сделать перерыв и выделить на производство WWE 2K22 в два раза больше времени.',
        id: 0,
        image: require('@/assets/logo.png'),
        isOpen: false
      },
      {
        title: 'Объявлена дата релиза WWE 2K22',
        text: 'Издательство 2K Sports объявило, что WWE 2K22 выйдет 11 марта. Разработчики также представили премьерный трейлер игры. Разработчики обещают «свежий геймплей», «ошеломительную графику» и новый режим. Однако чем именно новая часть серии будет отличаться от предыдущих, пока неизвестно. Релиз прошлой серии игры — WWE 2K20 — состоялся в октябре 2019 года. Тайтл вышел на ПК, PlayStation 4 и Xbox One. Пользователи персональных компьютеров и критики очень низко оценили игру — 1,5 балла из 10 от геймеров и 43 балла из 100 от критиков соответственно. Из-за этого руководство 2K решило сделать перерыв и выделить на производство WWE 2K22 в два раза больше времени.',
        id: 1,
        isOpen: false
      },
      {
        title: 'Инсайдер: новая Need for Speed выйдет осенью',
        text: 'Издательство Electronic Arts и студия Criterion Games планируют выпустить новую часть серии Need for Speed в сентябре-октябре 2022 года. Об этом сообщил инсайдер Том Хендресон. В марте 2021 года глава студий Electronic Arts Лора Мили сообщила о заморозке производства новой Need for Speed. Студии пришлось приостановить работу над гоночной игрой, чтобы помочь DICE с многопользовательским шутером Battlefield 2042. Ранее энтузиаст из России выпустил фанатский трейлер неофициального ремейка Need for Speed Underground 2. В нем продемонстрирован заезд на трассе «Маяк» с улучшенной графикой. Ролик вышел на канале ODONATA CINEMA на YouTube',
        id: 2,
        isOpen: false
      }]
    }
  },
  getters: {
    likesCaption (state) {
      return `Всего лайков: ${state.likes}`
    }
  },
  mutations: {
    incLikes (state) {
      state.likes++
    }
  },
  actions: {

  }
})
