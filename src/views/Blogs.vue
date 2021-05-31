<template>
  <div class="container">
    <div class="left">
      <div class="title">Blogs</div>
      <div class="content">
        <div
          class="subTitle"
          v-for="(item, index) in blogTitle"
          :key="index"
        >
          <h2>
            {{ item.title }}
          </h2>
          <p class="timestamp">{{ item.timestamp }}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">Blog-title</div>
      <div class="content"></div>
    </div>
  </div>
</template>
<script>
import { GETBLOG } from "../store/mutations-type.js";
export default {
  data() {
    return {
      blogTitle: [
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
        {
          title: "Hello world",
          timestamp: "2021-03-26 03:58",
        },
      ],
      blogs: null,
    };
  },
  created() {
    this.blogs = this.$store.commit(GETBLOG);
    console.log(this.blogs);
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  .left {
    border: 1px solid #c7c7c7;
    border-radius: 16px;
    overflow: hidden;
    flex: 1 1;
    margin-right: 12px;
    .title {
      background-color: rgb(221, 221, 221);
      padding: 12px;
      text-align: center;
      border-bottom: 2px solid gray;
    }
    .content {
      padding: 12px;
      cursor: pointer;
      overflow-y: auto;
      max-height: 100%;
      background-color: #fff;
      padding: 10px;

      .subTitle {
        padding: 12px;
        cursor: pointer;
        border-radius: 2px;
        margin-bottom: 15px;
        &.active {
          background-color: #ffd03f;
        }
        &:hover {
          color: #ffd03f;
        }
        .timestamp {
          color: gray;
          font-size: 12px;
        }
      }
    }
  }
  .right {
    border: 1px solid #c7c7c7;
    border-radius: 16px;
    overflow: hidden;
    flex: 2 1;
    .title {
      background-color: rgb(221, 221, 221);
      padding: 10px;
      text-align: center;
      border-bottom: 2px solid gray;
    }
    .content {
      overflow-y: auto;
      min-height: 100%;
      background-color: #fff;
      padding: 10px;
    }
  }
}
</style>
