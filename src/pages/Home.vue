<script setup lang="ts">
import { onMounted } from 'vue';
import Projects from '../components/Projects.vue';
function scrollToTop() {
    window.scrollTo(0, 0);
}

onMounted(() => {
    scrollToTop();
});
</script>
<template>
    <article>
        <header>
            <h1>Let's talk about scaling up <span class="text-gradient">your business</span> and discover what technology can do for you.</h1>
            <p class="text-gradient"><em>But perhaps you want to get to know me first...</em></p>
        </header>
        <section class="console">
            <h2><span class="func-name">Who_Is_Javier</span><span class="code">()</span></h2>
            <ul>
                <li>Arizona Native 🌵</li>
                <li>Husband 🤵🏽</li>
                <li>Cat & Dog Dad 🐈🐕</li>
                <li>Fighting Game Enthusiast 🕹️</li>
                <li>Game Developer 🕹️👨‍💻</li>
                <li>Bicyclist 🚴🏽‍♂️</li>
            </ul>
            <h2><span class="func-name">Services</span><span class="code">()</span></h2>
            <ul>
                <li>Web Design 🌐✏️</li>
                <li>Web & API Development 🌐👨‍💻</li>
                <li>Illustration 🎨</li>
                <li>Photography 📷</li>
            </ul>
            <h2><span class="func-name">Skills</span><span class="code">()</span></h2>
            <ul>
                <li><a href="https://learn.microsoft.com/en-us/dotnet/core/introduction">.NET</a></li>
                <li><a
                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">JavaScript</a>
                </li>
                <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
                <li><a href="https://vuejs.org/">Vue</a></li>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
                <li><a
                        href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/?OCID=AIDcmm5edswduu_SEM_c919ed88e836143047d38e59a53c56ee:G:s&ef_id=c919ed88e836143047d38e59a53c56ee:G:s&msclkid=c919ed88e836143047d38e59a53c56ee">Azure</a>
                </li>
                <li><a href="https://learn.microsoft.com/en-us/devops/develop/git/what-is-git">git</a></li>
            </ul>
            <h2><span class="func-name">Contact</span><span class="code">()</span></h2>
            <ul>
                <li><a href="mailto:javy.programador@gmail.com">javy.programador@gmail.com</a></li>
                <li><a href="tel:+19287500873">Call 928.750.0873</a></li>
            </ul>
            <div aria-hidden="true">JaviShell> </div>
        </section>
        <Projects />
    </article>
</template>

<style scoped>
header {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    font-size: 2rem;
}

header p {
    font-weight: 700;
}

header h1 {
    font-weight: 900;
    font-family: Raleway;
    font-size: 3rem;
    margin: 1em;
}

li {
    margin-bottom: .25em;
}

.func-name {
    color: #c8f2fb;
}

.code {
    color: #efec23;
}

.console {
    font-family: monospace;
    font-size: 1.25em;
    color: aliceblue;
    background-color: var(--light-mode-text);
    padding: 0;
    margin: 0 auto;
    width: 90%;
    max-width: 1000px;
    border-radius: 1em;
    box-shadow: 0 5px 10px 0 #555;
}

.console>* {
    padding-inline-start: 0;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin: .5em 5% 0;
}

.console::before {
    content: 'JaviShell';
    background-color: #333;
    display: block;
    padding: .5em 1em;
    font-family: Raleway-Italics;
    font-weight: normal;
    border-radius: 1em 1em 0 0;
}

.console div {
    padding: 1em 0;
}

.console div::after {
    content: '_';
    display: inline-block;
    background-color: aliceblue;
    font-family: monospace;
    font-weight: bolder;
    animation: blink steps(2, jump-none) 1s infinite;
}

@keyframes blink {
    from {
        opacity: 100%;
    }

    to {
        opacity: 0%;
    }
}

@media screen and (max-width: 426px) {
    header h1 {
        font-size: 2rem;
    }

    header {
        font-size: 1.25rem;
    }
    
    .console {
        font-size: 1.1em;
    }
}
</style> 
