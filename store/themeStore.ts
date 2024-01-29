import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore',{
    state:()=>({ isDark: false as boolean }),
    getters:{
        get_theme: (state) => state.isDark
    },
    actions:{
        changeTheme(){ this.isDark = !this.isDark }
    }
})