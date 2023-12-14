<template>
  <div :class="[ getisDarkMode ? 'dark-mode' : 'light-mode', getIsAccessible ? 'accessible-mode' : 'real-mode' ]">
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MenuBar from './components/MenuBar.vue';
import { useGeneralStore } from './store';
import { storeToRefs } from 'pinia'

import { checkCookie } from './utils';

const store = useGeneralStore()

const { getisDarkMode, getIsAccessible } = storeToRefs(store)

if(checkCookie('darkmode')) {
  store.toggleIsDarkMode()
}
if(checkCookie('accessible')) {
  store.toggleIsAccessible()
}

</script>


<style scoped>

</style>
