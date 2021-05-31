import { ADDBLOG, GETBLOG } from "./mutations-type";

export default {
  [ADDBLOG](state, payload) {
    const blog = {
      title: payload.title,
      content: payload.content,
      timestamp: new Date().toLocaleString("en-us", {
        dateStyle: "long",
      }),
    };
    console.log("ADDBLOG SUCCESS");
    state.blogs.push(blog);
  },
  [GETBLOG](state) {
    return state.blogs;
  },
};
