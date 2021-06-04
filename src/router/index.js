import Vue from "vue";
import VueRouter from "vue-router";
import Blogs from "../views/Blogs.vue";
import Work from "../views/Work.vue";
import CreateBlog from "../views/CreateBlog.vue";

const Home = () => import("../views/Home.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
    meta: {
      title: "Work",
    },
  },
  {
    path: "/create",
    name: "CreateBlog",
    component: CreateBlog,
    meta: {
      title: "CreateBlog",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/About.vue"
      ),
    meta: {
      title: "About",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
