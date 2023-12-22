<template>
    <div class="page">
        <h1>Unlock {{store.getActiveDungeon}}</h1>
    </div>
</template>

<script setup>
import { useGeneralStore } from '../store';

const store = useGeneralStore()
</script>