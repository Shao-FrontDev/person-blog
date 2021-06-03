<template>
  <div class="wrapper">
    <header>background</header>
    <section>
      <ul>
        <li
          class="colorPicker"
          v-for="(color, index) in colors"
          :key="index"
          :class="color"
          @click="changeColor(color)"
        ></li>
      </ul>
    </section>
  </div>
</template>

<script>
import { PICKUPCOLOR } from "../store/mutations-type";
export default {
  name: "BgColorPicker",
  data() {
    return {
      colors: [
        "green-bg",
        "black-bg",
        "main-bg",
        "red-bg",
        "colour-bg",
      ],
    };
  },
  methods: {
    changeColor(color) {
      this.$store.commit(PICKUPCOLOR, color);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}
.colorPicker {
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.green-bg {
  background-color: #44a75e;
}
.main-bg {
  background-color: #4456a7;
}
.red-bg {
  background-color: #a74444;
}

.black-bg {
  background-color: #474747;
}

.colour-bg {
  background: linear-gradient(
      45deg,
      #e10522,
      rgba(225, 5, 34, 0) 70%
    ),
    linear-gradient(
      135deg,
      #3105d1 10%,
      rgba(49, 5, 209, 0) 80%
    ),
    linear-gradient(
      225deg,
      #0adbd8 10%,
      rgba(10, 219, 216, 0) 80%
    ),
    linear-gradient(
      315deg,
      #09f505 100%,
      rgba(9, 245, 5, 0) 0
    );
}

section {
  ul {
    display: flex;
  }
}
</style>
