<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">

    <!-- desktop nav bar -->
    <nav-bar class="navigate" v-if="!isTablet"/>
    <hr v-if="!isTablet">

    <!-- menu button -->
    <div v-if="isTablet" class="icon-ctr">
      <font-awesome-icon
        @click="showNavBar()"
        class="icon"
        icon="bars"
        size="7x" />
    </div>

    <!-- mobile navbar modal -->
    <transition name="mobile-bar">
      <div
        v-if="isTablet && mobileNavBar"
        class="mobile-nav-ctr">
        <nav-bar
          v-if="mobileNavBar"
          @routeChange="showNavBar()"
          :style="{ backgroundColor: homeStyle.backgroundColor }"
          class="mobile-nav" />
      </div>
    </transition>
    <transition name="fade-bg">
      <div
        v-if="mobileNavBar"
        class="faded-bg"
        @click="showNavBar()"/>
    </transition>
    <!-- mobile navbar modal end-->

    <!-- content  -->
    <div class="content">
      <transition name="next-page" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullPage',
  data() {
    return {
      homeStyle: {
        backgroundColor: '#fefefe',
      },
      mobileNavBar: false,
    };
  },
  methods: {
    jumpTo(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
    showNavBar() {
      this.mobileNavBar = !this.mobileNavBar;
    },
  },
  computed: {
    isTablet() {
      return this.$mq === 'smMobile' || this.$mq === 'mdMobile' || this.$mq === 'smTablet' || this.$mq === 'lgTablet';
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.1vw;
  margin: 0;
}
#base {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
}
.navigate {
  flex-basis: 15%;
  padding-left: 5em;
  padding-right: 3em;
}
.content {
  flex-basis: 85%;
  height: 100%;
  overflow-y: auto;
}
.content > * {
  margin: 1em 4em 0em 4em;
}
.mobile-nav-ctr {
  position: absolute;
  width: 35%;
  height: 100%;
  z-index: 2;
}
.mobile-nav {
  padding-right: 2em;
}
.icon-ctr {
  position: absolute;
  border-radius: 5px;
  background-color: grey;
  top: 1rem;
  left: 0.4rem;
  padding: 0.2em;
  width: 2em;
  height: 2em;
  cursor: pointer;
}
.icon {
  color: white;
  width: inherit;
  height: inherit;
  cursor: Wpointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.faded-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.75;
  z-index: 1;
}

/* Next Page Transition */
.next-page-enter-active {
  animation: new-page 0.6s ease-out;
}
.next-page-leave-active {
  animation: leave-page 0.4s ease-out;
}
@keyframes new-page {
  from { transform: translateX(-20em); opacity: 0; }
  to { transform: translateX(0em); opacity: 1; }
}
@keyframes leave-page {
  from { transform: translateX(0em) scale(1); opacity: 0.75; }
  to { transform: translateX(7em) scale(0.7); opacity: 0; }
}
/* Mobile Nav Bar Transition */
.mobile-bar-enter-active {
  transition-property: transform, max-width, width;
  transition: 0.35s ease-in-out;
  z-index: 2;
}
.mobile-bar-leave-active {
  transition: 0.1s ease;
}
.mobile-bar-enter, .mobile-bar-leave-to {
  transform: translateX(-100em);
  max-width: 25%;
}
.mobile-bar-enter-to, .mobile-bar-leave {
  max-width: 100%;
}
/* Faded Bg Transition */
.fade-bg-enter-active{
  transition: opacity 0.5s ease;
}
.fade-bg-leave-active {
  transition-delay: 0s;
}
.fade-bg-enter, .fade-bg-leave-to {
  opacity: 0;
}
.fade-bg-enter-to, .fade-bg-leave {
  opacity: 0.75;
}

/* Desktop Responsiveness */
@media screen and (max-width: 1400px) {
  * {
    font-size: 1.3vw;
  }
}
@media screen and (max-width: 1300px) {
  * {
    font-size: 1.55vw;
  }
  .navigate {
    flex-basis: 10%;
  }
  .content {
    flex-basis: 90%;
  }
}

/* Tablets and Mobile */
@media screen and (max-width: 1100px) {
  * {
    font-size: 1.8vw;
  }
  .content {
    flex-basis: 100%;
  }
  .content > * {
    margin: 1em 0.5em 0 0.5em;
  }
}
@media screen and (max-width: 800px) {
  * {
    font-size: 16px;
  }
  .mobile-nav-ctr {
    width: 67%;
  }
}
@media screen and (max-width: 500px) {
  * {
    font-size: 14px;
  }
}
</style>
