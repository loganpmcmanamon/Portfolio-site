<template>
  <main>
      <section id="portfolio-container">
          <project-card v-for="project in projectData.ProjectArray" :key="project.id" v-bind:project="project"/>

      </section>
  </main>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue"
import jsonData from "/projects.json"

export default {
    components: {ProjectCard},

    data(){
        return{
            projectData: jsonData
        }
    }


}
</script>

<style>

</style>