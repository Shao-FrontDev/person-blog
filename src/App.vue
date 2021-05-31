<template>
  <div id="app">
    <Navigation />
    <div class="view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import url("./assets/styles/global.scss");
body {
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.view-container {
  padding: 30px 50px;
  height: 95%;
  overflow: hidden;
}
</style>
