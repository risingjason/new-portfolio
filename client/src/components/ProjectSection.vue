<template>
  <div id="section"
    @click="openLink(projectLink)"
  >
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
      <!-- <div
        class="project-image"
        :style="{ backgroundImage: `url(${getImage(projectImage)})`}"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectTitle: String,
    projectDescription: String,
    projectTech: String,
    projectImage: String,
    projectLink: String,
  },
  data() {
    return {};
  },
  methods: {
    createBreak(text) {
      return text.split('\n').join('<br />');
    },
    getImage(img) {
      const image = require.context('../assets/', false, /\.png$/);
      return image(`./${img}`);
    },
    openLink(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style>
p {
  margin: 0.5em 0;
}
#section {
  margin-bottom: 1em;
  padding: 0.5em 0.85em;
  width: 100%;
  height: auto;
  max-height: 12.5em;
  overflow: hidden;

  flex: 1;

  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;

  border: solid 2px #efefef;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  cursor: pointer;
}
#section:active, #section:focus, #section:hover {
  box-shadow: 5px 5px 50px #cecece;
  transform: scale(1.025);
  transition: all .3s ease-in-out;
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
  width: inherit;
  height: inherit;
  grid-column: 1;
  /* flex-basis: 50%;
  align-self: flex-start; */
}
.right {
  width: inherit;
  height: inherit;
  grid-column: 2;
  /* flex-basis: 50%;
  align-self: flex-start; */
}
.right > img {
  display: block;
  margin: 0;
  padding: 0;
  width: inherit;
  height: inherit;
  overflow: auto;
  max-height: 12.5em;
  object-position: top;
  object-fit: cover;
  max-width: 100%;
}
</style>
