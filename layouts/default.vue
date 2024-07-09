<script setup lang="ts">
    const theme = useThemeStore()
    let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
    <section
     class="w-full flex flex-col transition-all ease-in-out duration-700 font-Rajdhani scroll-smooth"
     :class="isDark ? 'bg-innerDark':'bg-white'"
    >
        <div class="sticky top-0 z-50 w-full">
            <navbar/>
        </div>

        <slot/>

    </section>
</template>