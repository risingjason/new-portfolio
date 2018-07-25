<template>
  <div id="home">
    <div id="welcome" class="page-head">
      <h2 class="dark-red">Welcome!</h2>
    </div>

    <div
      class="home-section"
      v-for="(article, key) in home" :key="key">
      <h1 class="dark-red">{{ article.title }}</h1>
      <p v-html="createBreak(article.description)" class="description"></p>
    </div>
  </div>
</template>

<script>
import methods from '@/helpers';
import homeText from '@/text/home.json';

export default {
  data() {
    return {
      createBreak: methods.createBreak,
      home: homeText,
    };
  },
};
</script>

<style scoped>
.home-section > h1 {
  margin: 0.5em 0;
}
.description {
  font-size: 1.2em;
}
</style>
