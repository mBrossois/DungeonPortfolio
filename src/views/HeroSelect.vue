<template>
    <div class="page">
        <h1>Unlock {{activeDungeon}}</h1>
    </div>
</template>

<script setup>
const activeDungeon = localStorage.getItem('activeDungeon')
</script>