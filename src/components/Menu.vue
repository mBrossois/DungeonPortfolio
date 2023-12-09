<template>
    <div class="container">
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
                <button>Projects</button>
                <button>Skill set</button>
                <button>About me</button>
                <button>Contact me</button>
            </nav>
        </div>
        <div class="background">
            <div v-for="index in 20" :style="`--bottom: ${index - 1}`" class="stone"></div>
        </div>
    </div>
</template>

<script setup>
import SunIcon from './icons/SunIcon.vue';
import MoonIcon from './icons/MoonIcon.vue';
import BookIcon from './icons/BookIcon.vue';
import AccessibilityIcon from './icons/AccessibilityIcon.vue';
import Switch from './Switch.vue';
    
</script>

<style scoped>
    .container {
        height: 100dvh;
        position: absolute;
        overflow: hidden;
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

    .stone {
        width: 100dvw;
        height: 5dvh;
        background-color: var(--menu-background);
        position: fixed;
        bottom: calc(5dvh * var(--bottom));
        border-radius: 2px;
        z-index: 100;
    }
</style>