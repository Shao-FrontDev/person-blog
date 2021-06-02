<template>
  <div class="container">
    <h2>写一个博客</h2>
    <div class="blog-info">
      <input
        type="text"
        class="title"
        placeholder="请输入标题"
        v-model="blog.title"
      />
    </div>
    <div class="editor">
      <VueEditor v-model="blog.content" />
    </div>
    <button class="btn" @click="saveBLog">
      发布
    </button>
  </div>
</template>

<script>
import { ADDBLOG } from "../store/mutations-type.js";
import { VueEditor } from "vue2-editor";
export default {
  name: "CreateBlog",
  components: {
    VueEditor,
  },
  data() {
    return {
      content: "",
      blog: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    saveBLog() {
      this.$store.commit(ADDBLOG, this.blog);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 960px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;

    .ql-toolbar,
    .ql-snow {
      background-color: hotpink;
    }

    .quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 90%;
    }

    .ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ql-editor {
      padding: 20px 16px 30ox;
    }
  }

  .btn {
    color: #303030;
    border-radius: 5px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    background-color: #fad41b;
    padding: 5px 20px;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .blog-info {
    margin: 15px 0;
  }

  .title {
    display: block;
    border: #8a8a8a;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    padding-left: 5px;
    transition: all 0.8s ease-in-out;
  }

  .title:focus {
    margin-left: 25px;
    transform: scaleX(1.3);
  }
}
</style>
