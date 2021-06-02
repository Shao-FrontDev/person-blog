<template>
  <div>
    <Modal
      :width="400 + 'px'"
      :height="450 + 'px'"
      :backgroundColor="bgColor"
      :visibility="status"
      @close="close"
    >
      <template v-slot:title>
        <div>
          留言
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "SettingModal",
  data() {
    return {
      status: true,
    };
  },
  components: {
    Modal,
  },
  methods: {
    close(status) {
      console.log("close");
      this.status = status;
    },
  },
  computed: {
    bgColor() {
      return "#fff";
    },
  },
};
</script>

<style></style>
