import {
  ADDBLOG,
  GETBLOG,
  OPENSETTING,
  CLOSESEETING,
  PICKUPCOLOR,
} from "./mutations-type";

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

  [CLOSESEETING](state) {
    state.BgModal = false;
  },
  [OPENSETTING](state) {
    state.BgModal = true;
  },
  [PICKUPCOLOR](state, payload) {
    state.background = payload;
  },
};
