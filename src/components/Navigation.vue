<script setup lang="ts">
import { ref, computed } from 'vue';

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

function handleChange(event: Event, shouldClose?: boolean) {
    const { checked } = event.target as HTMLInputElement;
    if (shouldClose) {
        navigationShown.value = false;
    }
    else {
        navigationShown.value = checked;
    }
}

</script>

<template>
    <nav id="navigation" class="flex">
        <div id="logo-group" class="flex">
            <router-link id="logo-link" to="/"></router-link>
            <input id="display-nav-btn" :checked="navigationShown" type="checkbox" @change.prevent="handleChange" />
            <label id='display-nav-label' htmlFor='display-nav-btn' class="flex" :aria-label="ariaMessage">
                <svg class='hamburger' viewBox='0 0 100 100' width='60' aria-hidden="true">
                    <rect class='line top' rx="5" width='80' x="10" height="10" y="25"></rect>
                    <rect class='line mid' rx="5" width='80' x="10" height="10" y="45"></rect>
                    <rect class='line bot' rx="5" width='80' x="10" height="10" y="65"></rect>
                </svg>
            </label>
        </div>
        <ul id="links" @click.prevent="(e: Event) => handleChange(e, true)" class="grid" :class="navClass">
            <li><router-link class="link" to="/">home();</router-link></li>
            <li><router-link class="link" to="/resume">resume();</router-link></li>
            <li><router-link class="link" to="/projects">projects();</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    margin-block-end: 0;
    margin-block-start: 0;
    list-style-type: none;
    padding-inline-start: 0;
}

/*Begin mobile nav button classes*/
.hamburger .line {
    transition: y 200ms 200ms, transform 200ms, opacity 200ms 200ms;
    transform-origin: center;
    stroke: var(--text-color);
    fill: var(--text-color);
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
.link {
    display: grid;
    align-content: center;
    text-decoration: none;
    height: 100%;
}

#display-nav-btn {
    display: none;
}

#display-nav-label {
    cursor: pointer;
    user-select: none;
}

#display-nav-label:hover .line,
#display-nav-label:hover::before,
#display-nav-label:hover::after {
    color: var(--link-hover);
    stroke: var(--link-hover);
    fill: var(--link-hover);
}

#display-nav-label::after,
#display-nav-label::before {
    font-size: 60px;
    place-self: center;
    transform: translateY(-5px);
    color: var(--text-color);
}

#display-nav-label::after {
    content: '}';
}

#display-nav-label::before {
    content: '{';
}

#navigation {
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--nav-height);
    background-color: var(--bg-color);
}

#logo-link {
    max-height: calc(var(--nav-height) - 20px);
    height: 100%;
    width: 50%;
    background: url(/logo_wordmark.svg) no-repeat;
}

#logo-group {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 .5em;
}

#links {
    z-index: 10;
    top: var(--nav-height);
    position: absolute;
    grid-template-rows: repeat(3, 20%);
    width: 100%;
    height: calc(100vh - var(--nav-height));
    background-color: var(--secondary-color);
    transition: all ease-in-out 200ms;
    font-family: monospace;
    font-weight: 700;
    text-align: center;
}

#links:not(.navigation-flyout) {
    transform: translateX(100%);
}

#links.navigation-flyout {
    transform: translateX(0);
    box-shadow: 0px 2px 5px 1px var(--text-color);
}

@media screen and (min-width: 768px) {

    #links:not(.navigation-flyout) {
        transform: translateX(200%);
    }

    #links.navigation-flyout {
        transform: translateX(100%);
    }

    #links {
        border-radius: 1em 0px 0px 0em;
        width: 50%;
    }
}

@media screen and (min-width: 1024px) {
    #links:not(.navigation-flyout) {
        transform: translateX(400%);
    }

    #links.navigation-flyout {
        transform: translateX(300%);
    }

    #links {
        width: 25%;
    }
}

@media (prefers-color-scheme: dark) {
    #logo-link {
        background: url(/logo_wordmark_light.svg) no-repeat;
    }
}
</style>