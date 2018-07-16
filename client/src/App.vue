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
  /* justify-content: center; */
  /* align-content: center; */
  /* text-align: center; */
}
.dark-red {
  color: #b30000;
}
.light-gray {
  color: #aeaeae;
}
.page-head {
}
.page-head > * {
  margin: 0;
}
.section {
  margin: 2em 0;
}
.section-title > h1 {
  margin: 0;
}
.section-title {
  font-family: 'PT Sans', sans-serif;
  font-size: 1.5em;
}
.section-description {
  color: black;
  font-size: 0.9em;
}
</style>
