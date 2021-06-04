<template>
  <div>
    <MessageListItem
      v-for="(messages, index) in Messages"
      :key="index"
      :messages="messages"
    />
  </div>
</template>

<script>
import MessageListItem from "./MessageListItem.vue";
export default {
  name: "MessageList",
  components: { MessageListItem },
  data() {
    return {
      Messages: [],
    };
  },
  created() {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => {
        this.Messages = data;
      });
  },
};
</script>

<style lang="scss" scoped></style>
