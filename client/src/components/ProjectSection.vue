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
        <p class="light-gray">Examples</p>
        <p v-html="createBreak(projectExamples)"></p>
      </div>
    </div>
    <div class="right">
      <div
        class="project-image"
        :style="{ backgroundImage: `url(${getImage(projectImage)})`}"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectTitle: String,
    projectDescription: String,
    projectExamples: String,
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
  margin: 0;
  padding: 0.5em;
  height: 14em;

  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;

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
  width: 100%;
  height: 100%;
  align-self: flex-start;
}
.right {
  width: 100%;
  height: 100%;
  align-self: flex-end;
}
.project-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
}
</style>
