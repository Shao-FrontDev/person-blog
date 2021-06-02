<template>
  <div>
    <Modal :visibility="visibility">
      <template v-slot:title>
        <div class="title">
          Setting
        </div>
      </template>
      <BgColorPicker />
    </Modal>
  </div>
</template>

<script>
import BgColorPicker from "./BgColorPicker.vue";
import Modal from "./Modal.vue";
export default {
  name: "SettingModal",
  components: {
    Modal,
    BgColorPicker,
  },
  computed: {
    visibility() {
      return this.$store.getters.BgColor;
    },
  },
};
</script>

<style></style>
