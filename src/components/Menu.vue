<template>
    <div class="container" :class="{'open': isMenuOpen}">
        <div class="content">
            <div class="switches">
                <div class="dark-light-mode">               
                    <SunIcon></SunIcon>
                    <Switch></Switch>
                    <MoonIcon></MoonIcon>
                </div>
                <div class="accessibility-mode">               
                    <BookIcon></BookIcon>
                    <Switch></Switch>
                    <AccessibilityIcon></AccessibilityIcon>
                </div>
            </div>

            <nav>
                <button ref="projects">Projects</button>
                <button ref="skillSet">Skill set</button>
                <button ref="aboutMe">About me</button>
                <button ref="contactMe">Contact me</button>
            </nav>
        </div>
        <div class="background">
            <div v-for="index in 20" :style="`--item: ${index - 1}`" :key="index" class="stone"></div>
        </div>
    </div>
</template>

<script setup>
import SunIcon from './icons/SunIcon.vue';
import MoonIcon from './icons/MoonIcon.vue';
import BookIcon from './icons/BookIcon.vue';
import AccessibilityIcon from './icons/AccessibilityIcon.vue';
import Switch from './Switch.vue';

import { defineProps, nextTick, ref } from 'vue';
    
const props = defineProps({
    isMenuOpen: Boolean
})

const projects = ref();
const skillSet = ref();
const aboutMe = ref();
const contactMe = ref();

function splitToSpan(element) {
    const newWord = element.textContent.split('');
    element.innerText = '';

    for(let i in newWord) {
        const spanEl = document.createElement('span');
        spanEl.innerText = newWord[i];
        spanEl.setAttribute('class', 'letter');
        spanEl.style.setProperty('--letter-delay', i);
        element.appendChild(spanEl);
    }
}

nextTick(() => {
    splitToSpan(projects.value);
    splitToSpan(skillSet.value);
    splitToSpan(aboutMe.value);
    splitToSpan(contactMe.value);
})
</script>

<style scoped>
    .container {
        height: 100dvh;
        position: absolute;
        overflow: hidden;
        visibility: hidden;
        transition: visibility 0ms 3000ms;
    }

    .container.open {
        visibility: visible;
        transition: visibility 0ms;
    }

    .content {
        position: relative;
        z-index: 250;
        width: 100dvw;
    }

    .switches {
        padding-left: 2rem;
        padding-top: 2rem;
    }

    .switches > div {
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity 350ms ease;
    }

    .switches > div > :not(:last-child) {
        margin-right: 1rem;
    }

    .switches .dark-light-mode {
        padding-bottom: 1rem;
    }

    .switches .accessibility-mode {
        padding-bottom: 10rem;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        margin: 0 auto;
        width: fit-content;
    }

    nav > button {
        color: var(--text-color);
        border: none;
        background-color: unset;
        font-size: 36px;
    }

    nav > button:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .stone {
        border-radius: 2px;
        z-index: 100;
        width: 100dvw;
        height: 5.1dvh;
        background-color: var(--menu-background);
        position: fixed;
        bottom: calc(5dvh * var(--item));
        transform: translateX(100dvw);
        transition: 200ms ease-in calc(var(--item) * 100ms) ;
    }

    .container.open .background .stone {
        transform: translateX(0);
    }

    .container.open .content .switches > div {
        opacity: 1;
        transition: opacity 350ms ease 1750ms
    }

</style>