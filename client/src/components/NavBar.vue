<template>
  <div id="navbar">
    <!-- picture -->
    <div class="prof-pic">
      <img src="../assets/prof-pic.jpeg" />
    </div>

    <!-- name -->
    <p class="name color-theme"
      @click="jumpTo('Home')">
      Jason Yatfai Zhang
    </p>
    <!-- nav bar links -->
    <ul class="navi">
      <li v-for="(child,key) in getChildrenRoutes" :key="key">
        <p class="hover-ul"
          :class="{ 'active-ul': isHere(child.name) }"
          @click="jumpTo(child.name)">
          {{child.name}}
        </p>
      </li>
    </ul>

    <!-- contact links -->
    <div class="contact-links">
      <font-awesome-icon
        @click="openLink('https://linkedin.com/in/jasonyatfaizhang')"
        :icon="['fab', 'linkedin-in']" />
      <font-awesome-icon
        @click="openLink('https://github.com/risingjason')"
        :icon="['fab', 'github']" />
    </div>
  </div>
</template>

<script>
import methods from '@/helpers';

export default {
  data() {
    return {
      currentRouteStyle: {
        'box-shadow': '0px 2px 0px',
      },
    };
  },
  methods: {
    jumpTo(routeName) {
      this.$emit('routeChange');
      this.$router.push({
        name: routeName,
      });
    },
    openLink(link) {
      this.$emit('routeChange');
      methods.openLink(link);
    },
    isHere(routeName) {
      if (this.$route.name === routeName) {
        return true;
      }
      return false;
    },
  },
  computed: {
    getChildrenRoutes() {
      return this.$router.options.routes[0].children;
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
}
#navbar {
  width: 100%;
  height: 100%;

  text-align: end;

  display: flex;
  flex-direction: column;;
}
#navbar > .name {
  margin: 1.5em 0;
  font-size: 1.5em;
  cursor: pointer;
}
#navbar > .navi li {
  margin: 0.5em 0;
}
#navbar > .navi li p {
  margin: 0;
}
.active-ul {
  box-shadow: 0px 2px 0px #3399ff;
}
.hover-ul {
  cursor: pointer;
  padding: 0 2px;
  display: inline-block;
  transition: .15s ease-in-out;
}
.hover-ul:hover {
  transition: .3s ease-in-out;
  box-shadow: 0px 2px 0px #3399ff;
}
.contact-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.contact-links > * {
  margin: 0 0.5em;
  cursor: pointer;
}
.contact-links > *:hover {
  color: #3399ff;
}
.prof-pic  {
  align-self: flex-end;
  width: 7.5em;
  height: 7.5em;

  margin-top: 5em;
  padding: 0;

  background-color: #222222;
  border: solid 8.5px #222222;
  border-radius: 50%;
}
.prof-pic > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

@media screen and (max-width: 800px) {
  #navbar {
    font-size: 1.35em;
  }
  .hover-ul:hover {
    box-shadow: none;
  }
  .contact-links > *:hover {
    color: inherit;
  }
  .prof-pic  {
    width: 100px;
    height: 100px;
    border: solid 5px #222222;
  }
}
</style>
