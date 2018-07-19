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
        <a href="https://github.com/risingjason/discord-bot-nodejs" target="_blank">Github Link</a>
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
        <div class="project-image" />
      </div>
    </div>

    <div class="end-of-page">
      <hr>
      <small>There's more to come. Coding never stops...</small>
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
  padding: 0.5em;
  height: 15em;

  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;

  border: solid 2px #efefef;
  border-radius: 5px;
  transition: all .3s ease-in-out;
}
.section:active, .section:focus, .section:hover {
  box-shadow: 5px 5px 50px #cecece;
  transform: scale(1.025);
  transition: all .3s ease-in-out;
}
.section-title {
  margin-top: 0;
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
  height: inherit;
  background-image: url('../assets/project-discord-bot.png');
  background-size: cover;
  background-position: center center;  
}
.end-of-page {
  margin-top: 5em;
}
.end-of-page > small {
  font-size: 1.2em;
}
</style>
