<template>
    <svg width="46" height="57" viewBox="0 0 46 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g :class="{'open': isMenuOpen}" clip-path="url(#clip0_43_77)">
            <rect y="1.52588e-05" width="46" height="13.7544" rx="2" fill="#60584C"/>
            <rect y="20.6316" width="46" height="13.7544" rx="2" fill="#60584C"/>
            <rect y="43.2281" width="46" height="13.7544" rx="2" fill="#60584C"/>
        </g>
        <defs>
            <clipPath id="clip0_43_77">
                <rect width="46" height="56.9825" fill="white"/>
            </clipPath>
        </defs>
    </svg>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  isMenuOpen: Boolean
})
</script>

<style scoped>
    svg {
        cursor: pointer;
    }

    rect {
        transition: all 200ms ease-in;
        fill: #60584C;
        transform-box: fill-box;
        transform-origin: center;
    }

    g > rect:nth-child(1) {
        transition: all 300ms ease-in;
    }

    svg:hover > g:not(.open) > rect:nth-child(1) {
        transform: translateY(16px);
    }

    svg:hover > g:not(.open) > rect:nth-child(2) {
        transform: translateY(9px);
    }

    svg > g.open > rect:nth-child(1) {
        fill: #60584C00;
    }

    svg > g.open > rect:nth-child(2) {
        transform: rotate(45deg);
    }

    svg > g.open > rect:nth-child(3) {
        transform: translateY(-22px) rotate(-45deg);
    }

    svg:hover > g.open > rect:nth-child(2) {
        transform: rotate(50deg);
    }

    svg:hover > g.open > rect:nth-child(3) {
        transform: translateY(-22px) rotate(-50deg);
    }


</style>