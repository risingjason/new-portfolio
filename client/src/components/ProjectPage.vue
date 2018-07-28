<template>
  <div id="projects">
    <div id="title" class="page-head">
      <h2 class="dark-red">Projects</h2>
    </div>
    <div class="project-section">
      <proj-section
        v-for="(project,key) in projects" :key="key"
        :projectTitle="project.title"
        :projectDescription="project.description"
        :projectTech="project.tech"
        :projectImage="project.image"
        :projectLink="project.link"
      />
    </div>
    <div class="end-of-page">
      <hr>
      <small>There's more to come.</small>
    </div>
  </div>
</template>

<script>
import ProjectFile from '@/text/projects.json';

export default {
  data() {
    return {
      projects: ProjectFile,
    };
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
  align-self: flex-end;
}
.end-of-page > small {
  font-size: 1.2em;
}
.proj-section {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
