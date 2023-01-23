<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const navigationShown = ref<boolean>(false);

//navigation-flyout will render on the ul if navigationShown is true
const navClass = computed(() => {
    return {
        'navigation-flyout': navigationShown.value
    };
});

const ariaMessage = computed<string>(() => {
    return navigationShown.value ? "Hide Navigation" : "Show Navigation";
});

function handleChange(event: Event) {
    const { checked } = event.target as HTMLInputElement;
    navigationShown.value = checked;
}

</script>

<template>
    <nav id="navigation">
        <input id="display-nav-btn" :checked="navigationShown" type="checkbox" @change.prevent="handleChange" />
        <label id='display-nav-label' htmlFor='display-nav-btn' :aria-label="ariaMessage">
            <svg class='hamburger' viewBox='0 0 100 100' width='60' aria-hidden="true">
                <rect class='line top' rx="5" width='80' x="10" height="10" y="25"></rect>
                <rect class='line mid' rx="5" width='80' x="10" height="10" y="45"></rect>
                <rect class='line bot' rx="5" width='80' x="10" height="10" y="65"></rect>
            </svg>
        </label>
        <ul id="links" :class="navClass">
            <li>about();</li>
            <li>resume();</li>
            <li>projects();</li>
        </ul>
    </nav>
</template>

<style scoped>
/*Begin mobile nav button classes*/
.hamburger .line {
    transition: y 200ms 200ms, transform 200ms, opacity 200ms 200ms;
    transform-origin: center;
    stroke: var(--light-mode-text);
    fill: var(--light-mode-text);
}

input:checked~label .hamburger .line {
    y: 45;
}

input:checked~label .hamburger .line:is(.top, .bot) {
    transition: y 200ms, transform 200ms 200ms;
}

input:checked~label .hamburger .line.top {
    transform: rotate(45deg);
}

input:checked~label .hamburger .line.bot {
    transform: rotate(-45deg);
}

input:checked~label .hamburger .line.mid {
    opacity: 0;
    transition: opacity 0ms 200ms
}

input:checked~.mobile-nav {
    transform: translateX(0);
}

/*End mobile nav button classes*/
#display-nav-btn {
    display: none;
}

#display-nav-label {
    display: flex;
}

#display-nav-label::after,
#display-nav-label::before {
    font-size: 60px;
    place-self: center;
    transform: translateY(-5px);
    color: var(--light-mode-text);
}

#display-nav-label::after {
    content: '}';
}

#display-nav-label::before {
    content: '{';
}

#navigation {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    column-gap: 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--nav-height);

    /* DEV */
    border: 1px solid black;
}

#links {
    margin-block-end: 0;
    margin-block-start: 0;
    list-style-type: none;
    padding-inline-start: 0;
    display: grid;
    width: 100%;
    transition: all ease-in-out 200ms;
    background-color: var(--light-mode-bg-color);
    font-family: monospace;
    font-weight: 700;

    /* DEV */
    border: 1px blue solid;
}

#links:not(.navigation-flyout) {
    transform: translateX(100%);
}

#links.navigation-flyout {
    transform: translateX(0);
}
</style>