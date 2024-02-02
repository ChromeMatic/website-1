<script setup lang="ts">
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
    <section
     class="w-full min-h-screen flex flex-col overflow-hidden transition-all 
     ease-in-out duration-200"
    >

     <div class="w-full sticky top-0 z-50">
        <navbar/>
     </div>

     <section
       class="flex flex-col space-y-8 w-full h-full"
       :class="isDark ? 'bg-Dark text-white'
       :'bg-[#EBF5EE]'"
     >

        <div
         v-motion="StagerEffect(-100,0,500)"
         class="w-full lg:h-[34rem] h-[50%] bg-center flex"
        :class="isDark ? 'bg-light_Img'
        :'bg-dark_Img'"
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
                  Fellowship Empowerment Centre Ltd is a Technical and Vocational Skills Training Centre.
                </h2>
              </span>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center space-y-4 p-4">

          <h2 class="text-3xl text-center">
            About Us
          </h2>
          
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">

            <div
              class="py-8 px-2 rounded-md flex flex-col space-y-3 justify-start items-center"
              :class="isDark ? 'bg-innerDark'
              :'bg-green-400/20 text-teal-800'"
            >
                <h3 class="text-xl font-semibold">
                  Mission
                </h3>

                <p>
                  A premier technical and Vocational Educational Centre established to 
                  train and certify young adults in relevant labour market demand courses.
                </p>
            </div>

            <div
              class="py-8 px-2 rounded-md flex flex-col space-y-3 justify-start items-center"
              :class="isDark ? 'bg-innerDark'
              :'bg-green-400/20 text-teal-800'"
            >
                <h3 class="text-xl font-semibold">
                  Vision
                </h3>

                <p>
                  A world-class educational institution developed to prepare young people to
                  meet the needs of the labour market and contribute to the improvement of  their quality of life and ultimately the Jamaican Society.
                </p>
            </div>


          </div>
        </div>

     </section>

    </section>
</template>