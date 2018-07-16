<template>
  <div id="projects" class="content-parent">
    <div id="title" class="page-head">
      <h2 class="dark-red">Projects</h2>
    </div>

    <div class="section">
      <div class="left">
        <h1 class="section-title dark-red">
          Discord Chat Bot
        </h1>
        <a href="https://github.com/risingjason/discord-bot-nodejs" target="_blank">Github</a>
        <div class="description">
          <p>
          A Discord bot that reads user input and returns replies.
          <br />
          Created with Discord.js and hosted with Heroku.
          <br />
          Uses various APIs to display data from based on user inputs.
          <br />
          <br />
          <span class="light-gray">Examples</span>
          <br />
          !!yugioh
          <br />
          Allows users to search for a card and if the card exists,
          the bot will output descriptions and the image of the card.
          </p>
        </div>
      </div>
      <div class="right">
        <div class="project-image">
          <img src="../assets/project-discord-bot.png" alt="">
        </div>
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
p {
  margin: 0;
  display: inline-block;
}
a {
  color: #aeaeae;
  text-decoration: none;
}
a:hover, a:visited {
  color: #aeaeae;
}
.section {
  margin: 0;
  height: 15em;
  display: flex;
  overflow:hidden;
  flex-direction: row;
  justify-content: space-between;
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
  height: inherit;
}
.project-image > img {
  width: 100%;
  height: auto;
}
</style>
