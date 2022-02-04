export default {
  count (state) {
    return state.posts.length
  },
  all (state) {
    return state.posts
  },
  newsPosts (state) {
    return state.posts.filter(post => post.type === 'news')
  },
  lessonsByCourseId (state) {
    return (id) => state.lessons.filter(lesson => lesson.courseId === id)
  }
}
