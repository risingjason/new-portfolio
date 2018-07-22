<template>
  <div id="projects" class="content-parent">
    <div id="title" class="page-head">
      <h2 class="dark-red">Projects</h2>
    </div>
    <div class="project-section">
      <proj-section
        v-for="(project,key) in projects" :key="key"
        :projectTitle="project.projectTitle"
        :projectDescription="project.projectDescription"
        :projectTech="project.projectTech"
        :projectImage="project.projectImage"
        :projectLink="project.projectLink"
      />
    </div>
    <div class="end-of-page">
      <hr>
      <small>There's more to come. Coding never stops...</small>
    </div>
  </div>
</template>

<script>
import ProjectFile from '@/projects.json';

export default {
  data() {
    return {
      projects: ProjectFile,
    };
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
#projects {
  /* width: 100%; */
  height: 100%;
  margin: 1em;
  /* overflow-x: scroll; */
}
#projects > * {
  margin: 0.5em 0;
}
.end-of-page {
  margin-top: 5em;
}
.end-of-page > small {
  font-size: 1.2em;
}
.proj-section {
  flex: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
