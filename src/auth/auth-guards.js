import { getCookie, setCookie } from "../utils";
import { useGeneralStore } from "../store";

export function isUnlocked(routeName) {
    const cookie = getCookie(routeName);
    if(cookie !== 'unlocked') {
        const store = useGeneralStore()
        localStorage.setItem("activeDungeon", routeName);
        return {name: 'hero-select'}
    }
}