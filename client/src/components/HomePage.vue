<template>
  <div id="home">
    <div id="welcome">
      <h1 class="section-title dark-red">Welcome!</h1>
      <div class="section-description">
        <p>Hi, my name is Jason!</p>
      </div>
    </div>
    <br />
    <div id="about-me">
      <h1 class="section-ttile dark-red">About Me</h1>
      <div class="section-description">
        <p>I graduated from UC Davis in the summer of 2017 with a degree in Computer Science.</p>
        <p>If you want to learn more, check out the projects section.</p>
        <p>Or, if you would rather get in touch with me, check out the contact page.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

* {
  margin: 0;
}
#home {
  height: 100%;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center; */
}
.section-title {
  font-family: 'PT Sans', sans-serif;
}
.section-description {
  color: black;
}
</style>
