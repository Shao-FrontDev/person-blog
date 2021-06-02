<template>
  <div class="container">
    <section>
      <h1>Code</h1>
      <div class="project">
        <div class="square"></div>
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
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  hr {
    transform: scale(1.1);
  }

  h1 {
    display: inline-block;
    padding: 8px;
    background-color: gray;
  }

  .project {
    display: flex;

    .square {
      margin: 40px 0;
      margin-right: 30px;
      height: 100px;
      width: 100px;
      background-color: chocolate;
    }
  }
}

section {
  padding-top: 30px;
}
</style>
