<template>
  <div class="container">
    <section>
      <h1>Code</h1>
      <div class="project">
        <div class="square">
          <AnimateItem>
            <Github />
            <template v-slot:title>
              <div>贪吃蛇</div>
            </template>
          </AnimateItem>
        </div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
    <hr />
    <section>
      <h1>Code</h1>
      <div class="project">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import AnimateItem from "../components/AnimateItem.vue";
import Github from "../assets/Icons/github.svg";
export default {
  name: "Work",
  components: {
    AnimateItem,
    Github,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  hr {
    transform: scale(1.1);
  }

  h1 {
    color: #faf8eb;
    display: inline-block;
    padding: 8px;
    background-color: #76777b;
    border-radius: 2px;
  }

  .project {
    display: flex;

    .square {
      margin: 40px 0;
      margin-right: 30px;
      height: 100px;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

section {
  padding-top: 30px;
}

.icon {
  width: 40px;
  height: 40px;
}
</style>
