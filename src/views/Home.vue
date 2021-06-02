<template>
  <div class="home">
    <h1>Home</h1>
    <Modal :visibility="visibility">
      <template v-slot:title>
        <div class="title">
          Setting
        </div>
      </template>
      <BgColorPicker />
    </Modal>
    <HomeNav />
  </div>
</template>

<script>
// @ is an alias to /src
import BgColorPicker from "../components/BgColorPicker.vue";
import Modal from "../components/Modal.vue";
import HomeNav from "../components/HomeNav.vue";
export default {
  name: "Home",
  components: { HomeNav, Modal, BgColorPicker },
  computed: {
    visibility() {
      return this.$store.getters.BgColor;
    },
  },
};
</script>

<style lang="scss" scoped></style>
