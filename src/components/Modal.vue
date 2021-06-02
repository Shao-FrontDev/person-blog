<template>
  <div class="figure-pop" v-show="visibility">
    <header>
      <Close class="close-icon" @click="close" />
      <slot name="title"></slot>
    </header>
    <div class="figure-pop-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { CLOSESEETING } from "../store/mutations-type";

import Close from "../assets/Icons/close.svg";
export default {
  props: {
    visibility: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {
    Close,
  },
  methods: {
    close() {
      this.$store.commit(CLOSESEETING);
    },
  },
};
</script>

<style lang="scss" scoped>
.figure-pop {
  overflow: hidden;
  border-radius: 8px;
  width: 300px;
  height: 250px;
  border: 1px solid rgb(138, 138, 138);
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  header {
    background-color: #e9e9e9;
    position: relative;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid rgb(138, 138, 138);

    .close-icon {
      cursor: pointer;
      position: absolute;
      left: 10px;
      top: 5px;
    }
  }
}

.figure-pop-main {
  padding-top: 20px;
  background-color: #fad41b;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
