<script setup lang="ts">
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme })

  let Objectives:string[] = [
    "Establish and maintain quality educational programmes that are aligned to prescribed Standards of Learning and supports the curricula.",
    "The delivery of a rigorous and relevant curricula meeting student needs, preferences, and labour market demands.",
    "The provision of state-of-the-art online facilities, equipment, instructional technology, and facilities to support the teaching learning process.",
    "Foster a progressive but excellent relations with students, parents, member schools, as well as the immediate and the business community",
    "Establish work-based experiences and apprenticeship opportunities that reinforce academic learning and technical training for students"
  ]

  let core_values:string[] = [
    "Quality: Commitment to excellence, students success and the realization of individual potential",
    "High Expectations: emphasis on excellent performance based on standards defined.",
    "Innovation:  Provision of Transformational leadership, relevant  curriculum design, and effective instructional delivery to meet the labour market demand.",
    "Dignity of all Occupations:  An emphasis on teaching and modelling ethical values in work and life and respecting each occupation as being of value to the individual, the employer, and society regardless of the status and level of financial compensation",
    "Lifelong Learning:  The ability to adapt and upgrade individual skills in a rapidly changing globalized economy.",
  ]
</script>

<template>
    <section
     class="w-full min-h-screen flex flex-col"
    >

     <div class="w-full sticky top-0 z-50">
        <navbar/>
     </div>

     <section
       class="flex flex-col space-y-8 w-full h-full"
       :class="isDark ? 'bg-Dark text-white'
       :'bg-magnolia'"
     >

        <div
         v-motion="StagerEffect(-100,0,575)"
         class="w-full lg:h-screen h-[28rem] bg-center flex"
        :class="isDark ? 'bg-light_Img'
        :'bg-dark_Img'"
        >
          <div
           class="w-full h-full flex justify-center items-center backdrop-blur-none"
           :class="isDark ? 'bg-green-500/10 text-white'
           :'bg-[#202124]/40 text-white'"
          >
              <span class="flex flex-col justify-center items-center space-y-4 w-full">
                <h1
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

        <div 
         id="Mission_Vision"
         class="flex flex-col justify-center items-center space-y-4 p-4 "
        >

          <h2
           v-motion="StagerEffect(0,-50,425)" 
           class="text-4xl text-center overline p-4 border rounded-md"
           :class="isDark ? 'text-teal-500 bg-innerDark border-teal-950'
           :'text-teal-700 bg-white border-teal-50'"
          >
            Mission & Vision
          </h2>
          
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">

            <div
              v-motion="StagerEffect(0,75,625)"
            >
              <div
                v-motion="slight_move_1" 
                class="py-8 px-4 rounded-md flex flex-col space-y-3 justify-start items-center border-2 lg:h-48"
                :class="isDark ? 'bg-innerDark border-teal-900 text-teal-500'
                :'bg-white text-teal-700 border-teal-100 shadow-cus_sh_1'"
              >
                  <h3 class="text-2xl font-semibold">
                    Mission
                  </h3>

                  <p class="subpixel-antialiased leading-6 text-center font-medium">
                    A premier technical and Vocational Educational Centre established to 
                    train and certify young adults in relevant labour market demand courses.
                  </p>
              </div>
            </div>
            
            <div
            v-motion="StagerEffect(0,-75,725)"
            >
             <div
              v-motion="slight_move_2"
              class="py-8 px-4 rounded-md flex flex-col space-y-3 justify-start items-center border-2 lg:h-48"
              :class="isDark ? 'bg-innerDark border-teal-900 text-teal-500'
              :'bg-white text-teal-700 border-teal-100 shadow-cus_sh_1'"
            >
                <h3 class="text-2xl font-semibold">
                  Vision
                </h3>

                <p class="subpixel-antialiased leading-6 text-center font-medium">
                  A world-class educational institution developed to prepare young people to
                  meet the needs of the labour market and contribute to the improvement of  their quality of life and ultimately the Jamaican Society.
                </p>
             </div>
            </div>
          </div>
        </div>

        <div
         v-motion="StagerEffect(100,0,525)"
         class="p-4 w-full flex h-[32rem]"
        >
          <div
          class="flex flex-col  space-y-8  w-full h-full bg-center rounded-md"
          :class="isDark ? 'cus_dark_sh bg-values'
          :'shadow-cus_sh_1 bg-values_light'"
          >
           <div
             class="w-full flex flex-col justify-center items-start lg:space-y-6 space-y-4
              h-full p-8 overflow-hidden rounded-md"
             :class="isDark ? 'bg-Dark/50 '
             :'bg-innerDark/45 text-teal-50'"
           >
             <h2 class="text-3xl overline">
               Core Values
             </h2>
             
             <p
              class="subpixel-antialiased leading-6 font-medium text-start"
              v-for="item in core_values"
             >
               {{ item }}
             </p>
           </div>  

          </div>
        </div>

        <div
         id="objectives"
         v-motion="StagerEffect(100,0,625)"
         class="flex lg:space-x-4 lg:flex-row flex-col space-x-0 lg:space-y-0 space-y-3 h-[32rem]
         p-4"
         :class="isDark ? 'bg-innerDark'
         :'bg-off_wite'"
        >
          <div 
           class="flex justify-center items-center rounded-md bg-goals w-full h-full bg-cover"
          ></div>

          <div
           class="py-8 px-4 rounded-md flex flex-col lg:space-y-6 space-y-2 items-start border-2 
           w-full h-full"
           :class="isDark ? 'bg-Dark border-teal-900 text-teal-500'
           :'bg-white text-teal-700 border-teal-100 shadow-cus_sh'"
          >
            <h1 class="lg:text-2xl text-xl font-semibold">
              Objectives
            </h1>

            <p
             v-for="obj in Objectives" 
             class="font-medium lg:text-base text-sm leading-6 subpixel-antialiased"
            >
             {{ obj }}
            </p>
          </div>

        </div>

     </section>

    </section>
</template>