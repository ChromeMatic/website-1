<script setup lang="ts">
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
   <section
     class="w-full min-h-screen flex flex-col transition-all 
     ease-in-out duration-700"
    >

        <div class="w-full sticky top-0 z-50">
            <navbar/>
        </div>

        <div 
         v-motion="StagerEffect(0,-100,575)"
         class="flex flex-col space-y-6 w-full justify-center items-center py-4"
         :class="isDark ? 'bg-Dark text-white':'bg-off_white'"
        >

           <h1 
             class="text-4xl overline font-semibold"
             :class="isDark ? 'text-teal-500 bg-innerDark border-teal-950'
             :'text-teal-700 bg-white border-teal-50'"
            >
                About Us
            </h1>

            <img 
             class="h-[32rem]"
             :src="isDark ? '/team_dark.svg':'/team.svg'" 
             alt="About us"
            >

        </div>
    </section>
</template>