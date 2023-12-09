<template>
    <header>
        <div class="logo container">
            <LogoPortfolio />

            <p id="logo-text">Dungeon portfolio</p>
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

    #logo-text {
        margin-left: 1rem;
        font-size: 24px;
    }

    /* Medium sized screens */
    @media screen and (min-width: 481px) and (max-width: 1024px) {
        header {
            padding: 0 2rem;

        }

    }

    /* Big sized screens */
    @media screen and (min-width: 1025px) {
        header {
            padding: 0 4rem;

        }

    }

</style>