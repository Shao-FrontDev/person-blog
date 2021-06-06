<template>
  <div class="container">
    <section>
      <h1>Code</h1>
      <div class="project">
        <div class="square">
          <AnimateItem>
            <Money />
            <template v-slot:title>
              <p>小记账</p>
            </template>
          </AnimateItem>
        </div>
        <div class="square">
          <AnimateItem>
            <Todo />
            <template v-slot:title>
              <p>KANKAN</p>
            </template>
          </AnimateItem>
        </div>
        <div class="square">
          <a
            href="https://shao-frontdev.github.io/MVC_Tasks/index.html"
            target="_black"
          >
            <AnimateItem>
              <JavaScript />
              <template v-slot:title>
                <p>MVC</p>
              </template>
            </AnimateItem>
          </a>
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import Todo from "../assets/Icons/todo.svg";
import JavaScript from "../assets/Icons/js.svg";
import AnimateItem from "../components/AnimateItem.vue";
import Money from "../assets/Icons/money.svg";
export default {
  name: "Work",
  components: {
    AnimateItem,
    Money,
    Todo,
    JavaScript,
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

p {
  color: #faf8eb;
}
</style>
