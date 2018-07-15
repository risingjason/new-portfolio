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
.dark-red {
  color: #b30000;
}
</style>
