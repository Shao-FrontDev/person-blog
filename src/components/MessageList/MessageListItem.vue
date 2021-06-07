<template>
  <div class="itemWrapper">
    <div class="itemUp">
      <h2>{{ messages.user }}</h2>
      <div class="like">
        {{ messages.likes }}<Like class="like-icon" />
      </div>
    </div>
    <div class="message">
      {{ messages.msg }}
    </div>
  </div>
</template>

<script>
import Like from "@/assets/Icons/like.svg";
export default {
  name: "MessageListItem",
  props: {
    messages: {
      type: Object,
      required: true,
    },
  },
  components: {
    Like,
  },
};
</script>

<style lang="scss" scoped>
.itemUp {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.itemWrapper {
  width: 450px;
}
.message {
  padding: 12px 10px;
  width: 100%;
  border-radius: 8px;
  display: block;
  background: burlywood;
}

.like {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.like-icon {
  margin-left: 5px;
}
</style>
