<template>
  <div
    id="section"
    @click="openLink(projectLink)">
    <div class="left">
      <h1 class="title dark-red">
        {{projectTitle}}
      </h1>
      <p class="light-gray">Click to see the Project Link!</p>
      <div class="description" >
        <p v-html="createBreak(projectDescription)"></p>
        <p class="light-gray">Tech</p>
        <p v-html="createBreak(projectTech)"></p>
      </div>
    </div>

    <div class="right">
      <img :src="getImage(projectImage)" alt="">
    </div>
  </div>
</template>

<script>
import methods from '@/helpers';

export default {
  props: {
    projectTitle: String,
    projectDescription: Array,
    projectTech: Array,
    projectImage: String,
    projectLink: String,
  },
  data() {
    return {
      openLink: methods.openLink,
      createBreak: methods.createBreak,
    };
  },
  methods: {
    getImage(img) {
      const image = require.context('../assets/', false, /\.png$/);
      return image(`./${img}`);
    },
  },
  computed: {
    isTablet() {
      return this.$mq === 'smMobile' || this.$mq === 'mdMobile' || this.$mq === 'smTablet' || this.$mq === 'lgTablet';
    },
  },
};
</script>

<style>
p {
  margin: 0.5em 0;
}
#section {
  padding: 0;
  margin-bottom: 1.5em;

  height: auto;
  max-height: 15em;

  flex: 1;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;

  border: solid 2px #efefef;
  border-radius: 5px;
  transition-property: box-shadow, tranform;
  transition: .3s ease-in-out;

  overflow: hidden;
  cursor: pointer;
}
#section:active, #section:focus, #section:hover {
  box-shadow: 5px 5px 50px #cecece;
  transform: scale(1.025);
  transition-property: box-shadow, tranform;
  transition: .3s ease-in-out;
}
.description {
  color: black;
  font-size: 0.9em;
}
.title {
  font-family: 'PT Sans', sans-serif;
  font-size: 1.5em;
  margin-top: 0;
}
.title > h1 {
  margin: 0;
}

.left {
  padding: 0.5em 0.85em;
  width: inherit;
  height: inherit;
  grid-column: 1;
}
.right {
  width: inherit;
  height: inherit;
  grid-column: 2;
}
.right > img {
  display: block;
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100%;

  object-position: top;
  object-fit: cover;
}

/* Tablets and Mobile */
@media screen and (max-width: 1100px) {
  p {
    margin: 0;
  }

  #section:active, #section:focus, #section:hover {
    box-shadow: none;
    transform: scale(1);
  }
}
@media screen and (max-width: 700px) {
  #section {
    grid-auto-rows: 50% 50%;
    grid-template-columns: 100%;
    grid-row-gap: 1em;
    max-height: 30em;
  }
  .left {
    grid-column: 1;
    grid-row: 1;
  }
  .right {
    /* width: 50em; */
    grid-column: 1;
    grid-row: 2;
  }
}
</style>
