<template>
  <div id="app">
    <NavBar class="navBar" />
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins&display=swap');
.sideBar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  position: relative;
  bottom: 93px
}
</style>

