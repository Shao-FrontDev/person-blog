<template>
  <div class="container">
    <div class="figureBox">
      <div class="square">
        <Support class="support-icon" />
      </div>
      <figcaption>点赞</figcaption>
    </div>
    <div class="figureBox">
      <div class="square">
        <Bulb />
      </div>
      <figcaption>说明</figcaption>
    </div>
    <div class="figureBox">
      <div class="square" @click="openMessageModal">
        <Message class="message-icon" />
      </div>
      <figcaption>留言</figcaption>
    </div>
    <div class="figureBox" @click="changeBgColor">
      <div class="square">
        <Setting />
      </div>
      <figcaption>设置</figcaption>
    </div>
  </div>
</template>

<script>


import { OPENSETTING } from "../store/mutations-type";
import Support from "../assets/Icons/support.svg";
import Bulb from "../assets/Icons/dengpao.svg";
import Message from "../assets/Icons/liuyan.svg";
import Setting from "../assets/Icons/setting.svg";
export default {
  components: {
    Support,
    Bulb,
    Message,
    Setting,
  },
  methods: {
    changeBgColor() {
      this.$store.commit(OPENSETTING);
    },

  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 100px;
  right: 40px;
}

.figureBox {
  margin: 30px 0;
  cursor: pointer;
}

.figureBox:hover {
  animation: figure-animate 0.5s ease;
}

.square {
  width: 50px;
  height: 50px;
}

figcaption {
  color: #f2f2f2;
}

@keyframes figure-animate {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-6px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}

.icon {
  width: 35px;
  height: 35px;
}
</style>
