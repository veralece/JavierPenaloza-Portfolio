<script setup lang="ts">
import data from "../data/projects.json";
</script>
<template>
    <section id="projects">
        <h1 class="text-gradient">Projects</h1>
        <section class="auto-grid">
            <section class="project card" v-for="project in data.projects">
                <h2 class="text-gradient"><a :href="project.url">{{ project.projectTitle }}</a></h2>
                <a :href="project.url">
                    <img class="project img" v-if="project.imgs !== ''" :src="`/imgs/${project.imgs}`"
                        :alt="project.projectTitle">
                </a>
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
    </section>
</template>
<style scoped>
.auto-grid {
    display: grid;
    margin: 0 auto;
    padding: 0 1em;
    column-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    max-width: 1600px;
}

.demo {
    border: 2px solid var(--link-hover);
    border-radius: 5px;
    width: fit-content;
    place-self: center;
    transition: box-shadow 150ms ease-in-out;
    display: block;
    box-shadow: 0 0 0 0 var(--text-color) inset;
}

.demo a {
    padding: 1em;
    display: block;
}

.demo:hover {
    box-shadow: 0 0 0 100px var(--text-color) inset;
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

.project.img {
    width: calc(100% - 2em);
    margin: 0 1em;
    border-radius: var(--card-border-size);
    box-shadow: 0 0 10px 0 #333;
    max-width: 600px;
    transition: box-shadow 250ms ease-in-out;
}

.project.img:hover {
    box-shadow: 0 0 50px 0px var(--link-hover);
}

.tech {
    list-style-type: none;
    margin: 0;
    padding-inline-start: 0;
    flex-flow: row wrap;
    justify-content: center;
    font-weight: bold;
}

.tech>* {
    border: 4px solid var(--link-hover);
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

@media screen and (max-width: 425px) {
    .auto-grid {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
}
</style>