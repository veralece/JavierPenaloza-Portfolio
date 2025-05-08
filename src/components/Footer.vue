<script setup lang="ts">

</script>
<template>
    <footer>
        <h1>This site was created with the help of coffee, my pets, and my wife.</h1>
        <section class="grid">
            <a href="mailto:javy.programador@gmail.com">e-mail me!</a>
            <a href="https://github.com/veralece/JavierPenaloza-Portfolio">source on github</a>
        </section>
        <aside>
            <small>Javier Penaloza &copy; 2023</small>
        </aside>
    </footer>
</template>

<style scoped>
.grid {
    row-gap: 1em;
    margin: 1em;
    justify-items: center;
}

h1 {
    font-size: 1em;
    font-weight: normal;
}

footer {
    text-align: center;
    background-color: var(--secondary-color);
    margin: 1em 0 0 0;
    padding: 1em 0;
}

a {
    width: fit-content;
}
</style>