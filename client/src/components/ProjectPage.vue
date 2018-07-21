<template>
  <div id="projects" class="content-parent">
    <div id="title" class="page-head">
      <h2 class="dark-red">Projects</h2>
    </div>

    <proj-section
      class="proj-section"
      v-for="(project,key) in projects" :key="key"
      :projectTitle="project.projectTitle"
      :projectDescription="project.projectDescription"
      :projectExamples="project.projectExamples"
      :projectImage="project.projectImage"
      :projectLink="project.projectLink"
    />

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
.end-of-page {
  margin-top: 5em;
}
.end-of-page > small {
  font-size: 1.2em;
}
</style>
