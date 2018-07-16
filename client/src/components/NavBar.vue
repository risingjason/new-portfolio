<template>
  <div id="navbar">
    <p class="name dark-red"
      @click="jumpTo('Home')">
      Jason Yatfai Zhang
    </p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    jumpTo(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
  }
}
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
  width: 15%;
  border-right: solid #dddddd;
  border-right-width: 1px;
  padding-left: 5em;
  padding-right: 3em;
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
}
.hover-ul:hover {
  transition: .3s ease-in-out;
  box-shadow: 0 1.5px #585858;
  /* text-decoration: underline; */
}
</style>
