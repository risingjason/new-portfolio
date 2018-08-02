<template>
  <div id="home">
    <div id="welcome" class="page-head">
      <h2 class="color-theme">Welcome!</h2>
    </div>

    <div
      class="home-section"
      v-for="(article, key) in home" :key="key">
      <h1 class="color-theme">{{ article.title }}</h1>
      <p v-for="(paragraph, key) in article.description" :key="key"
        class="description">
        {{ paragraph }}
      </p>
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
  font-size: 1.8em;
}
.description {
  margin: 0.8em 0;
  line-height: 1.5;
  font-size: 1.2em;
}
</style>
