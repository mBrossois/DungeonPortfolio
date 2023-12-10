import { defineStore } from "pinia"
import { ref, computed } from 'vue'

export const useGeneralStore = defineStore('generalStore', () => {
    const isDarkMode = ref(false)
    const isAccessible = ref(false)

    const getisDarkMode = computed(() => isDarkMode.value)
    const getIsAccessible = computed(() => isAccessible.value)

    function toggleIsAccessible() {
        isAccessible.value = !getIsAccessible.value
    }

    function toggleIsDarkMode() {
        isDarkMode.value = !getisDarkMode.value
    }
  
    return { getIsAccessible, getisDarkMode, toggleIsAccessible, toggleIsDarkMode}
  })