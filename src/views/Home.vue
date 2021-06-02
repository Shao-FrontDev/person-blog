<template>
  <div class="home">
    <h1>We are all in the gutter,</h1>
    <h1>but some of us are looking at the stars.</h1>
    <Modal :visibility="visibility">
      <template v-slot:title>
        <div class="title">
          Setting
        </div>
      </template>
      <BgColorPicker />
    </Modal>
    <SettingModal />
    <HomeNav />
  </div>
</template>

<script>
// @ is an alias to /src
import SettingModal from "../components/SettingModal.vue";
import BgColorPicker from "../components/BgColorPicker.vue";
import Modal from "../components/Modal.vue";
import HomeNav from "../components/HomeNav.vue";
export default {
  name: "Home",
  components: {
    HomeNav,
    Modal,
    BgColorPicker,
    SettingModal,
  },
  computed: {
    visibility() {
      return this.$store.getters.BgColor;
    },
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
