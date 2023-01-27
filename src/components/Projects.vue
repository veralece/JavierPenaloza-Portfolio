<script setup lang="ts">
import data from "../data/projects.json";
</script>
<template>
    <section id="projects">
        <h1 class="text-gradient">Projects</h1>
        <section class="project card" v-for="project in data.projects">
            <h2 class="text-gradient"><a :href="project.url">{{ project.projectTitle }}</a></h2>
            <section class="grid project-desc">
                <p><strong>Problem: </strong>{{ project.problem }}</p>
                <p><strong>Approach: </strong>{{ project.approach }}</p>
                <p><strong>Solution: </strong>{{ project.solution }}</p>
                <p><strong>Results: </strong>{{ project.results }}</p>
                <p class="demo"><a :href="project.url">Link to site</a></p>
            </section>
            <h3>Technology utilized</h3>
            <ul class="tech flex">
                <li v-for="tech in project.techStack">{{ tech }}</li>
            </ul>
        </section>
    </section>
</template>
<style scoped>
.demo {
    border: 1px solid var(--link-hover);
    border-radius: 5px;
    width: fit-content;
    place-self: center;
}

.demo a {
    padding: 1em;
    display: block;
}

.project-desc.grid {
    padding: 0 1em;
    text-align: left;
    font-size: 1.1em;
}

.project.card>h2 {
    font-size: 1.75rem;
    margin: .83em;
}

.tech {
    list-style-type: none;
    margin: 0;
    padding-inline-start: 0;
    flex-flow: row wrap;
    justify-content: center;
}

.tech>* {
    border: 3px solid var(--link-hover);
    border-radius: 5px;
    width: fit-content;
    padding: .5em 1em;
    margin: .25em;
}

#projects h1 {
    font-family: Raleway;
    font-weight: 900;
    font-size: 3rem;
}

#projects {
    text-align: center;
    margin-top: 5em;
}
</style>