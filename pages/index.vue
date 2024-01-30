<script setup lang="ts">
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
    <section
     class="w-full h-screen flex flex-col"
    >

     <div class="w-full sticky top-0 z-50">
        <navbar/>
     </div>

     <section
       class="flex w-full h-full space-x-2 px-2 py-4 "
       :class="isDark ? ''
       :'bg-[#EBF5EE]'"
     >


     </section>

    </section>
</template>