<template>
  <div id="home">
    <h1>Welcome!</h1>
    <p>Hi, my name is Jason!</p>
    <p>Welcome to my website.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.name)
  }
};
</script>

<style scoped>
* {
  margin: 0;
}
#home {
}
</style>
