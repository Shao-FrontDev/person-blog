<template>
  <div
    class="figure-pop"
    :style="widthAndHeight"
    v-show="visiability"
    ref="draggableContainer"
  >
    <header @mousedown="dragMouseDown">
      <Close class="close-icon" @click="close" />

      <slot name="title"></slot>
    </header>
    <div class="figure-pop-main" :style="bgColor">
      <slot></slot>
    </div>
    <slot name="messageInput" class="messageInput"></slot>
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
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  components: {
    Close,
  },

  methods: {
    close() {
      this.$emit("close", false);
    },
    dragMouseDown(e) {
      e.preventDefault();
      console.log("触发");
      this.positions.clientX = e.clientX;
      this.positions.clientY = e.clientY;

      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function(event) {
      event.preventDefault();
      this.positions.movementX =
        this.positions.clientX - event.clientX;
      this.positions.movementY =
        this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
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
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  overflow: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 1px solid rgb(138, 138, 138);
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
