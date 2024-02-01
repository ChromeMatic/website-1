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
       class="flex flex-col space-y-4 w-full h-full"
       :class="isDark ? 'bg-[#202124] '
       :'bg-[#EBF5EE]'"
     >

        <div
         v-motion="StagerEffect(-100,0,575)"
         class="w-full lg lg:h-[34rem] h-[50%] bg-center flex"
         :class="isDark ? ''
         :''"
         :style="isDark ? `background-image: url('https://images.unsplash.com/photo-1507981919056-e4804b83d74e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
         :`background-image: url('https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`"
        >
          <div
           class="w-full h-full flex justify-center items-center backdrop-blur-sm"
           :class="isDark ? 'bg-green-500/10 text-white'
           :'bg-[#202124]/40 text-white'"
          >
              <span class="flex flex-col justify-center items-center space-y-4 w-full">
                <h1
                 v-motion="glowText" 
                 class="lg:text-6xl text-4xl text-center"
                >
                  Fellowship & Employment Center
                </h1>
                <h2 class="lg:text-2xl text-center">
                  Hello and welcome Lorem ipsum dolor sit.
                </h2>
              </span>
          </div>
        </div>


     </section>

    </section>
</template>