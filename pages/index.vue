<script setup lang="ts">
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme })

  useHead({
    title: "Fellowship Employment Center",
    meta:[
      {
        name: 'description',
        content:"Creating and maintaining quality educational programs aligned with prescribed Standards of Learning is crucial for student success and community growth. By delivering a rigorous and relevant curriculum that meets students' needs and labor market demands, we ensure comprehensive educational experiences. Our state-of-the-art online facilities, advanced instructional technology, and modern equipment support effective teaching and learning processes. We foster progressive and excellent relationships with students, parents, member schools, and the broader business community. Additionally, our work-based experiences and apprenticeship opportunities reinforce academic learning and technical training, empowering students to realize their full potential. Our commitment to excellence and high expectations drives outstanding performance and individual success."
      }
    ]
  })

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
   class="w-full flex flex-col"
   :class="isDark ? 'bg-Dark text-teal-500'
   :''"
  >
    
    <div 
     v-motion="_StagerEffect_static(275,-25,0)"
     class="w-full h-[95vh] bg-dark_Img bg-cover"
    >
      <div
       v-motion="_StagerEffect_static(375,0,-50)"
       class="flex flex-col space-y-1 justify-center items-center w-full h-full transition-all ease-in-out duration-700"
       :class="isDark ? 'bg-innerDark/60 text-teal-100'
       :'bg-Dark/40 text-white'"
      >
        <h1
         v-motion="glowText" 
         class="text-7xl font-semibold"
        >
          Fellowship & Employment Center
        </h1>
        <h2 class="text-2xl">
          Fellowship Empowerment Centre Ltd is a Technical and Vocational Skills Training Centre.
        </h2>
      </div>
    </div>

    <section
     class="w-full p-2 flex flex-col space-y-4 overflow-hidden"
    >
      <div
       class="w-full lg:py-4 py-2 px-4 flex flex-col justify-center items-center space-y-4"
      >
        
        <h1
         v-motion="_StagerEffect(385,0,25)"
         class="text-3xl font-semibold"
         :class="isDark ? 'text-teal-500':'text-teal-700'"
        >
          Mission & Vision
        </h1>

        <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
          
          <div
           v-motion="_StagerEffect(375,0,50)"
           class="w-full" 
          >
            <div
             v-motion="card_movement_1"
             class="border-2 rounded-md flex flex-col justify-center items-center space-y-8 p-4"
             :class="isDark ? 'bg-teal-950 border-teal-950 shadow-cus_dark_sh text-teal-500':
             'shadow-cus_sh_1 text-teal-700'"
            >
              <h1 class="text-2xl font-semibold overline">Mission</h1>

              <p 
                class="text-center"
              >
                A premier technical and Vocational Educational Centre established to train and certify young adults in relevant labour market demand courses.
              </p>
            </div>
          </div>

          <div
           v-motion="_StagerEffect(475,0,50)"
           class="w-full" 
          >
            <div
             v-motion="card_movement_2"
             class="border-2 rounded-md flex flex-col justify-center items-center space-y-8 p-4"
             :class="isDark ? 'bg-teal-950 border-teal-950 shadow-cus_dark_sh text-teal-500':
             'shadow-cus_sh_1 text-teal-700'"
            >
              <h1 class="text-2xl font-semibold overline">Vision</h1>

              <p class="text-center">
                A world-class educational institution developed to prepare young people to meet the needs of the labour market and contribute to the improvement of their quality of life and ultimately the Jamaican Society.
              </p>
            </div>
          </div>


        </div>

      </div>

      <div class="w-full flex justify-center items-center py-1.5">
        <div
         v-motion="_StagerEffect(525,0,100)"
         class="p-4 w-full flex h-[28rem]"
        >
          <div
           v-motion="card_movement_1"
           class="flex flex-col  space-y-8  w-full h-full bg-center rounded-md"
           :class="isDark ? 'border-2 border-teal-950 shadow-cus_dark_sh bg-values'
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
      </div>

      <div
       class="w-full"
       v-motion="_StagerEffect(585,0,25)"
      >
        <div
        v-motion="StagerEffect(100,0,575)"
        class="flex flex-col space-y-4 p-4 justify-center items-center"
        :class="isDark ? 'bg-innerDark'
        :'bg-off_wite'" 
        >
        
        <h2 class="font-semibold text-xl overline">PLACEMENT SERVICES</h2>

        <object 
          data="OVERSEAS-EMPLOYMENT-AGENCY-CONTRACT- (2)(1).pdf" 
          class="rounded-md lg:h-[32rem] h-[26rem] w-[34rem] lg:w-full"
        ></object>
        
        <a
         class="rounded-md border-2 p-1.5 w-1/2 flex justify-center items-center
         border-teal-700 text-teal-700 font-semibold capitalize transition-all ease-in-out
         duration-700"
         :class="isDark ? 'hover:bg-indigo-500/20 hover:text-indigo-500 hover:border-indigo-500'
         :'hover:bg-indigo-500 hover:text-white hover:border-indigo-500'"
         href="/OVERSEAS-EMPLOYMENT-AGENCY-CONTRACT- (2)(1).pdf"
         download
        >
          <h3>download</h3>
        </a>
        </div> 
      </div>

      <div
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