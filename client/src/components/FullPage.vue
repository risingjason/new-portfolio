<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">
    <!-- nav bar -->
    <nav-bar class="navigate"></nav-bar>
    <hr>
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
        // backgroundColor: '#e0e0ff',
        backgroundColor: '#fefefe',
      },
    };
  },
  methods: {
    jumpTo(routeName) {
      this.$router.push({
        name: routeName,
      });
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
}
.content {
  flex-basis: 85%;
  height: 100%;
  overflow-y: auto;
}
.content > * {
  margin: 1em 4em 0em 4em;
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
</style>
