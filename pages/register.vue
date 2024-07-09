<script setup lang="ts">
 const theme = useThemeStore()
 let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
    <section
     class="flex flex-col space-y-8 w-full px-4 py-8"
     :class="isDark ? 'text-teal-500'
     :'text-teal-700'"
    >
        
    </section>
</template>