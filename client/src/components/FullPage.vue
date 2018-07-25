<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">
    <!-- nav bar -->
    <nav-bar class="navigate" v-if="!isTablet"/>
    <hr v-if="!isTablet">

    <!-- show nav bar button -->
    <div v-if="isTablet" class="icon" @click="showNavBar()">
      <font-awesome-icon icon="arrow-circle-up" :rotation="getDegrees" size="7x"></font-awesome-icon>
    </div>

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

    },
  },
  computed: {
    isTablet() {
      return this.$mq === 'smMobile' || this.$mq === 'mdMobile' || this.$mq === 'smTablet' || this.$mq === 'lgTablet';
    },
    getDegrees() {
      return 90;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.2vw;
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
.icon {
  width: 2em;
  height: 2em;
  position: absolute;
  top: 0.2em;
  left: 0.2em;
  cursor: pointer;
}
.icon > * {
  display: block;
  width: inherit;
  height: inherit;
}
/* Next Page Transition */
.next-page-enter-active, .next-page-leave-active {
  transition: all 0.75s ease-in-out;
}
.next-page-enter, .next-page-leave-to {
  opacity: 0;
  transform: translateX(10em);
}
.next-page-enter-to, .next-page-leave {
  opacity: 1;
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
}
@media screen and (max-width: 800px) {
  * {
    font-size: 2vw;
  }
}
@media screen and (max-width: 500px) {
  * {
    font-size: 2.5vw;
  }
}
</style>
