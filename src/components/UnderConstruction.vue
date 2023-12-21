<template>
    <Rive :width="1500" :height="1800" class="rive" src="/rive/under_construction.riv"></Rive>
</template>

<script setup>
import Rive from '../components/Rive.vue';
</script>

<style scoped>
.rive {
    position: absolute;
    top: 6.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 31.25rem;
    height: 37.5rem;
}

</style>