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
  color: #585858;
}
/* Global Styles */
.dark-red {
  color: #b30000;
}
.light-gray {
  color: #aeaeae;
}
.page-head > * {
  margin: 0;
  font-size: 2em;
}
.page-head > h2 {
  margin-bottom: 1em;
}
.description {
  color: black;
  font-size: 0.9em;
}

/* Tablets and Mobile */
@media screen and (max-width: 1100px) {
  .page-head {
    margin-left: 3em; 
  }
}
</style>
