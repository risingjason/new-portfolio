<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">
    <!-- nav bar -->
    <nav-bar class="navigate"></nav-bar>

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
  font-size: 20px;
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

  /* width: 100%; */
  height: 100%;
  overflow-y: scroll;
  /* padding: 0 2em; */
  /* padding-right: 5em; */

  border-left: solid #202020;
  border-left-width: 1px;
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
