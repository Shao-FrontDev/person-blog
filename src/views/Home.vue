<template>
  <div class="home">
    <h1>We are all in the gutter,</h1>
    <h1>but some of us are looking at the stars.</h1>

    <HomeNav />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "../components/HomeNav.vue";
export default {
  name: "Home",
  components: {
    HomeNav,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-right: 50px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  color: #fff;
  line-height: 1.5;
}

@media (min-width: 760px) {
  h1 {
    font-size: 76px;
  }
}
</style>
