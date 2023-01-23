<template>
    <nav>
        <input id="display-nav-btn" type="checkbox" @click.prevent="handleChange" />
        <label id='display-nav-label' htmlFor='display-nav-btn' :aria-label="ariaMessage">
            <svg className='hamburger' viewBox='0 0 100 100' width='60' aria-hidden="true">
                <rect className='line top' rx="5" width='80' x="10" height="10" y="25"></rect>
                <rect className='line mid' rx="5" width='80' x="10" height="10" y="45"></rect>
                <rect className='line bot' rx="5" width='80' x="10" height="10" y="65"></rect>
            </svg>
        </label>
        <ul :class="navClass">
            <li>about()</li>
            <li>resume()</li>
            <li>projects()</li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const navigationShown = ref<boolean>(false);

const navClass = computed(() => {
    return {
        'navigation-flyout': navigationShown
    };
});

const ariaMessage = computed<string>(() => {
    return navigationShown.value ? "Hide Navigation" : "Show Navigation";
});

function handleChange(event: Event) {

}

</script>

<style scoped>

</style>