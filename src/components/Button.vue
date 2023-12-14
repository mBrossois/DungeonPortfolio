<template>
    <router-link :to="goTo" abindex="0">
        <slot name="title"></slot>
        <slot name="icon" class="icon"></slot>
    </router-link>
</template>

<script setup>
    defineProps({
        goTo: String
    })
</script>

<style scoped>
    a {
        width: 8.125rem;
        height: 8.125rem;

        background-color: var(--nav-background-color);
        padding: .5rem;
        padding-bottom: .28rem;
        border: none;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    a:hover {
        cursor: pointer;
        outline: 2px solid var(--text-color);
    }

    .icon {
        height: 5.625rem;
        width: 5.625rem;
    }

    /* Medium sized screens */
    @media screen and (min-width: 481px) {
        a {
            width: 16.25rem;
            height: 16.25rem;
            padding: 1rem;

        }
    }
</style>