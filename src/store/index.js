import { defineStore } from "pinia"
import { ref, computed } from 'vue'

export const useGeneralStore = defineStore('generalStore', () => {
    const isDarkMode = ref(false)
    const isAccessible = ref(false)
    const activeDungeon = ref('')

    const getisDarkMode = computed(() => isDarkMode.value)
    const getIsAccessible = computed(() => isAccessible.value)
    const getActiveDungeon = computed(() => activeDungeon.value)

    function toggleIsAccessible() {
        isAccessible.value = !getIsAccessible.value
    }

    function toggleIsDarkMode() {
        isDarkMode.value = !getisDarkMode.value
    }

    function setActiveDungeon(dungeon) {
        activeDungeon.value = dungeon
    }
  
    return { 
        getIsAccessible, 
        getisDarkMode, 
        getActiveDungeon, 
        toggleIsAccessible,
        toggleIsDarkMode, 
        setActiveDungeon
    }
  })