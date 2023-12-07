<template>
    <header>
        <div class="logo container">
            <LogoPortfolio />

            <h1>Dungeon portfolio</h1>
        </div>

        <HamburgerIcon />
    </header>

    <LeafsIcon class="leafs icon" />
</template>

<script setup>
    import LogoPortfolio from './icons/LogoPortfolio.vue';
    import HamburgerIcon from './icons/HamburgerIcon.vue';
    import LeafsIcon from './icons/LeafsIcon.vue'
</script>

<style scoped>
    header {
        height: 7rem;
        background-color: var(--nav-background-color);

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }

    .logo.container {
        display: flex;
        align-items: center;

        cursor: pointer;
    }

    .logo.container {
        --logo-rotation: 0deg;
        margin-right: 1rem;
    }

    .logo.container:hover {
        --logo-rotation: 5deg;

    }

    .leafs.icon {
        position: absolute;
        right: 0;
    }
</style>