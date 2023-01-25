<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main>
    <router-view></router-view>
    <Footer></Footer>
  </main>
  <Navigation></Navigation>
</template>

<style scoped>

</style>
