<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
  <Navigation />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
