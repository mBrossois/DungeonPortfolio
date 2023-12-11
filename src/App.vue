<template>
  <div :class="[ getisDarkMode ? 'dark-mode' : 'light-mode', getIsAccessible ? 'accessible-mode' : 'real-mode' ]">
    <MenuBar></MenuBar>
    <Home></Home>
  </div>
</template>

<script setup>
import MenuBar from './components/MenuBar.vue';
import Home from './pages/Home.vue';
import { useGeneralStore } from './store';
import { storeToRefs } from 'pinia'

const store = useGeneralStore()

const { getisDarkMode, getIsAccessible } = storeToRefs(store)
</script>


<style scoped>

</style>
