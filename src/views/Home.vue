<template>
  <div class="home">
    <h1>Home</h1>
    <HomeNav />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeNav from "../components/HomeNav.vue";
export default {
  name: "Home",
  components: { HomeNav },
};
</script>
