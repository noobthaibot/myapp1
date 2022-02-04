export default {
  addPost (state, data) {
    state.posts.push(data)
  },
  clear (state) {
    state.posts = []
  }
}
