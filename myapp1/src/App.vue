<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
p {
  font-size: 20px;
}
.content-item {
  border-radius: 5px;
  margin-bottom: 10px;
}
.post-image {
  max-width: 100%;
  margin-top: 20px;
  margin-right: 20px;
  height: 200px;
  margin-bottom: 20px;
  margin-left: 10px;
  border-radius: 5px;
}
.post-date {
  display: flex;
  margin-left: 20px;
  font-size: 12px;
  margin-top: 20px;
}
.content-area {
  display: flex;
}
.post-text {
  text-align: justify;
  padding-right: 20px;
  color: black;
}
.post-title {
  padding-top: 20px;
  font-size: 24px;
  color: black;
}
h3 {
  margin: 0;
}
.image-container {
  width: 400px;
  flex: 0 0 auto;
}
main {
  padding-top: 20px;
}
</style>
