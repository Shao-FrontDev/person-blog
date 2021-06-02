<template>
  <div class="figureBox">
    <div class="figure">
      <slot />
    </div>
    <figcaption><slot name="title"></slot></figcaption>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.figure {
  margin-bottom: 2px;
}
.figureBox {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.figureBox:hover {
  animation: figure-animate 0.5s ease;
}

//动画
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
</style>
