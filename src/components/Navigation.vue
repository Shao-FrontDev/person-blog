<template>
  <div class="container">
    <ul class="nav-links" v-show="!mobile">
      <router-link :to="{ name: 'Home' }" class="link"
        >Home</router-link
      >

      <router-link :to="{ name: 'Blogs' }" class="link"
        >Blog</router-link
      >

      <router-link :to="{ name: 'Work' }" class="link"
        >Work</router-link
      >

      <router-link :to="{ name: 'About' }" class="link"
        >About</router-link
      >

      <router-link :to="{ name: 'CreateBlog' }" class="link"
        >Create</router-link
      >
    </ul>
    <div class="branding" v-show="!mobile">
      <Github class="icon" />
      <Time />
    </div>
    <menuIcon
      class="icon menuIcon"
      v-show="mobile"
      @click="toggleMobileNav"
    />
    <transition name="mobile-nav">
      <ul class="nav-links mobile-nav" v-show="mobileNav">
        <router-link :to="{ name: 'Home' }" class="link"
          >Home</router-link
        >

        <router-link :to="{ name: 'Blogs' }" class="link"
          >Blog</router-link
        >

        <router-link :to="{ name: 'Work' }" class="link"
          >Work</router-link
        >

        <router-link :to="{ name: 'About' }" class="link"
          >About</router-link
        >
      </ul>
    </transition>
  </div>
</template>

<script>
import Time from "./Time.vue";
import Github from "../assets/Icons/github.svg";
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "Navigation",
  components: {
    Time,
    Github,
    menuIcon,
  },
  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  watch: {
    $route() {
      this.mobileNav = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use './../assets/styles/var.scss';
.container {
  padding: 1em 6em;
  font-weight: bold;
  display: flex;
  background-color: var.$secondary-color;
  justify-content: space-between;
  position: relative;
  min-height: 42px;
  z-index: 99;

  .nav-links {
    .link {
      margin-right: 20px;
      font-weight: bolder;
      position: relative;
      transition: 0.3s color ease;
      &.router-link-exact-active::after {
        position: absolute;
        content: "";
        width: 30px;
        height: 30px;
        background-color: var.$primay-color;
        top: 0;
        left: 50%;
        transform: translateX(-15px);
        border-radius: 50%;
        z-index: -1;
      }
      &:hover::after {
        position: absolute;
        top: 0;
        left: 50%;
        content: "";
        height: 30px;
        width: 30px;
        transform: translateX(-15px);
        border-radius: 50%;
        border: 3px solid #fad41b;
      }
    }
  }
  //mobile-nav

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fad41b;
    align-items: center;

    .link {
      font-size: 48px;
      display: flex;
      padding: 10px 0;
      text-decoration: underline;
      &:hover {
        color: #faf8eb;
      }
    }
  }

  .menuIcon {
    position: absolute;
    right: 15px;
    cursor: pointer;
    z-index: 99;
  }

  .nav-links {
    display: flex;

    li {
      margin-right: 2em;
    }
  }
}

.branding {
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    margin-right: 5px;
    cursor: pointer;
  }
  p {
    margin-right: 1em;
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
