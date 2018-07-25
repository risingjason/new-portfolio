<template>
  <div id="navbar">
    <!-- name -->
    <p class="name dark-red"
      @click="jumpTo('Home')">
      Jason Yatfai Zhang
    </p>

    <!-- nav bar links -->
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
    </ul>

    <!-- contact links -->
    <div class="contact-links">
      <!-- <font-awesome-icon icon="linkedin-in" /> -->
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
    return {};
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
  margin-top: 5em;
  margin-bottom: 1.5em;
  font-size: 1.5em;
}
#navbar > .navi li {
  margin: 0.5em 0;
}
#navbar > .navi li p {
  margin: 0;
}
.hover-ul {
  cursor: pointer;
  padding: 0 0.25em;
  display: inline-block;
  transition: .15s ease-in-out;
}
.hover-ul:hover {
  transition: .3s ease-in-out;
  box-shadow: 0 1.5px #585858;
  /* text-decoration: underline; */
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
</style>
