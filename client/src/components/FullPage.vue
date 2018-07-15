<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">
    <div class="navigate">
      <p class="name"
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
            @click="jumpTo('Projects')">Projects</p>
        </li>
        <li>
          <p class="hover-ul"
          @click="jumpTo('Contact')">Contact</p>
        </li>
      </ul>
    </div>
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
ul {
  list-style: none;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
}
#base {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
}
.navigate {
  width: 15%;
  border-right: solid #dddddd;
  border-right-width: 1px;
  padding-left: 5em;
  padding-right: 3em;
  text-align: end;
  display: flex;
  flex-direction: column;;
}
.navigate > .name {
  margin-top: 5em;
  margin-bottom: 1.5em;
  font-size: 1.5em;
}
.navigate > .navi li {
  margin: 0.5em 0;
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
.hover-ul {
  cursor: pointer;
  padding: 0 0.25em;
  display: inline-block;
}
.hover-ul:hover {
  transition: .3s ease-in-out;
  box-shadow: 0 1.5px #585858;
  /* text-decoration: underline; */
}

/* Next Page Transition */
.next-page-enter-active, .next-page-leave-active {
  transition: all .5s ease-in-out;
}
.next-page-enter, .next-page-leave-to {
  opacity: 0;
  transform: translateX(10em);
}
.next-page-enter-to, .next-page-leave {
  opacity: 1;
}
</style>
