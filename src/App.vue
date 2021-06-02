<template>
  <div id="app">
    <Navigation />
    <div class="view-container" :class="bgColog">
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
  computed: {
    bgColog() {
      return this.$store.getters.getBackGround;
    },
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
}

.view-container {
  padding: 30px 50px;
  height: 90%;
  overflow: hidden;
}

.colorPicker {
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.green-bg {
  background-color: #44a75e;
}
.main-bg {
  background-color: #4456a7;
}
.red-bg {
  background-color: #a74444;
}

.black-bg {
  background-color: #474747;
}

.colour-bg {
  background: linear-gradient(
      45deg,
      #e10522,
      rgba(225, 5, 34, 0) 70%
    ),
    linear-gradient(
      135deg,
      #3105d1 10%,
      rgba(49, 5, 209, 0) 80%
    ),
    linear-gradient(
      225deg,
      #0adbd8 10%,
      rgba(10, 219, 216, 0) 80%
    ),
    linear-gradient(
      315deg,
      #09f505 100%,
      rgba(9, 245, 5, 0) 0
    );
}
</style>
