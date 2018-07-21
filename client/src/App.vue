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

body {
  margin: 0 !important;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #585858;
}
/* Global Styles */
.content-parent {
  height: 100%;

  display: flex;
  flex-direction: column;
}
.dark-red {
  color: #b30000;
}
.light-gray {
  color: #aeaeae;
}
.page-head > * {
  margin: 0;
}
.page-head > h2 {
  margin-bottom: 1em;
}
.description {
  color: black;
  font-size: 0.9em;
}
</style>
