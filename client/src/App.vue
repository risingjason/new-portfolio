<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

html, body {
  height: 100%;
  margin: 0 !important;
}
#app {
  width: 100vw;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Global Styles */
.color-theme {
  color: #3399ff;
}
.light-gray {
  color: #aeaeae;
}
.bright-gray {
  color: #dfdfdf;
}
.black {
  color: #585858;
}
.page-head > * {
  margin: 0;
  font-size: 2em;
}
.page-head > h2 {
  margin-bottom: 1em;
}

/* Tablets and Mobile */
@media screen and (max-width: 1100px) {
  .page-head {
    margin-left: 2.2em;
  }
}
</style>
