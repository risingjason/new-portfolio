<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">
    <!-- <div class="navigate">
      <p class="name dark-red"
        @click="jumpTo('Home')">Jason Yatfai Zhang</p>
      <ul class="navi">
        <li>
          <p class="hover-ul"
            @click="jumpTo('Home')">
            Home
          </p>
        </li>
        <li>
          <p class="hover-ul"
            @click="jumpTo('Projects')">
            Projects
          </p>
        </li>
        <li>
          <p class="hover-ul"
            @click="jumpTo('Contact')">
            Contact
          </p>
        </li>
      </ul>
    </div> -->
    <nav-bar class="navigate"></nav-bar>
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

.content {
  width: 85%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 5em;

  border-left: solid #202020;
  border-left-width: 1px;
}
.content > * {
  margin: 0 5em;
  margin-top: 4em;
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
