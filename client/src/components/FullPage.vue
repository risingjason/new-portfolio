<template>
  <div id="base"
    :style="{ backgroundColor: homeStyle.backgroundColor }">
    <div class="navigate">
      <p class="name"
        @click="jumpTo('Home')">Jason Yatfai Zhang</p>
      <ul class="navi">
        <li>
          <p class="hover-ul"
            @click="jumpTo('About')">
            About
          </p>
        </li>
        <li>
          <p class="hover-ul">Projects</p>
        </li>
        <li>
          <p class="hover-ul">Contact</p>
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
        backgroundColor: '#f0fff0',
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
  text-align: center;
}
.navigate {
  width: 50%;
  border-right: solid #dddddd;
  border-right-width: 1px;

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
  cursor: pointer;
}
.content {
  width: 50%;
  height: 100%;
  border-left: solid #dddddd;
  border-left-width: 1px;
}
.hover-ul {
  padding: 0 0.25em;
  display: inline-block;
}
.hover-ul:hover {
  transition: .3s ease-in-out;
  box-shadow: 0 1.5px #585858;
  /* text-decoration: underline; */
}

/* Next Page Transition */
.next-page-enter {
  opacity: 0;
  transform: translateX(10em);
  transition: all .5s ease-in-out;
}
.next-page-enter-to {
  opacity: 1;
  transition: all .3s ease-in-out;
}
.next-page-leave {
  opacity: 1;
  transition: all .3s ease-in-out;
}
.next-page-leave-to {
  opacity: 0;
  transform: translateX(10em);
  transition: all .5s ease-in-out;
}
</style>
