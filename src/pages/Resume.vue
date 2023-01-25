<script setup lang="ts">
import { onMounted } from 'vue';
import eduData from '../data/education.json';
import workData from '../data/experience.json';
function scrollToTop() {
    window.scrollTo(0, 0);
}

onMounted(() => {
    scrollToTop();
});

</script>
<template>
    <article>
        <section class="card">
            <h1>Education</h1>
            <ul>
                <li v-for="e in eduData.education">
                    <h2><strong>{{ e.degree }}</strong>, <em>{{ e.college }}</em></h2>
                    <p class="grad-date"><em>{{ e.graduated ? "Graduated" : "Anticipated Graduation" }}: {{ e.acquisitionDate }}</em></p>
                </li>
            </ul>
        </section>
        <section class="card">
            <h1>Work</h1>
            <ul>
                <li v-for="w in workData.experience">
                    <h2><strong>{{ w.jobTitle }}</strong>, <em>{{ w.organization }}</em></h2>
                    <p><em>{{ w.date }}</em></p>
                    <h2>Duties</h2>
                    <ul class="duties">
                        <li v-for="d in w.duties">{{ d }}</li>
                    </ul>
                </li>
            </ul>
        </section>
    </article>
</template>
<style scoped>
.card h1 {
    text-align: center;
}

.duties li {
    margin-top: .5em;
}

.duties {
    list-style-type: disc;
}
.grad-date {
    font-size: 1.25rem;
}

ul {
    margin: 0 1em;
   padding-inline-start: 0; 
    list-style-type: none;
}
</style>