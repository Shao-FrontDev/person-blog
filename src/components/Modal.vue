<template>
  <div
    class="figure-pop"
    :style="widthAndHeight"
    v-show="visiability"
  >
    <header>
      <Close class="close-icon" @click="close" />

      <slot name="title"></slot>
    </header>
    <div class="figure-pop-main" :style="bgColor">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Close from "../assets/Icons/close.svg";
export default {
  props: {
    height: {
      type: String,
      default: "250px",
    },
    width: {
      type: String,
      default: "300px",
    },
    backgroundColor: {
      type: String,
      default: "#fad41b",
    },
    visiability: {
      type: Boolean,
      required: true,
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
      this.$emit("close", false);
    },
  },
  computed: {
    widthAndHeight() {
      return {
        height: this.height + "px",
        width: this.width + "px",
      };
    },
    bgColor() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.figure-pop {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgb(138, 138, 138);
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);

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
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
