<script setup lang="ts">
  const theme = useThemeStore()
  let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
  <section
    class="flex flex-col space-y-8 w-full px-4 py-8 min-h-screen"
    :class="isDark ? 'text-teal-500'
    :'text-teal-700'"
  >
    <h1 class="text-4xl font-semibold text-center overline">
      About Fellowship & Employment Center
    </h1>

    <div
     v-motion="_StagerEffect(375,0,50)"
     class="w-full p-4 rounded-md border-2 text-center font-semibold "
    :class="isDark ? 'bg-teal-950 border-teal-900'
     :'shadow-cus_sh_1'"
    >
      <p class="subpixel-antialiased leading-6">
        Fellowship & Employment Center is a distinguished technical and vocational educational
        institution dedicated to empowering young adults through comprehensive training in high-demand 
        courses essential to today's labor market. Founded with a vision to become a global leader in 
        education, our mission is to prepare young individuals to excel professionally and enhance
        their quality of life, thereby contributing positively to Jamaican society.
      </p>
    </div>

    <div
     v-motion="_StagerEffect(475,0,50)"
     class="w-full p-4 rounded-md border-2 text-center font-semibold space-y-4"
     :class="isDark ? 'bg-teal-950 border-teal-900'
     :'shadow-cus_sh_2'"
    > 
      <h2 class="text-lg overline">
        Core Values
      </h2>
      <p class="subpixel-antialiased leading-6">
        At Fellowship & Employment Center, we uphold the following core values:
        Quality: We are committed to excellence, ensuring student success, and nurturing the realization of individual potential.
        High Expectations: We emphasize outstanding performance based on defined standards, setting the bar high for both students and educators.
        Innovation: Through transformational leadership and innovative curriculum design, we adapt swiftly to meet evolving labor market demands.
        Dignity of all Occupations: We instill ethical values in work and life, valuing each occupation for its contribution to individuals, employers, and society, irrespective of financial status.
        Lifelong Learning: We promote continuous skill development in a globalized economy, empowering individuals to adapt and thrive.
      </p>
    </div>

    <div
     v-motion="_StagerEffect(575,0,50)"
     class="w-full p-4 rounded-md border-2 text-center font-semibold space-y-4"
     :class="isDark ? 'bg-teal-950 border-teal-900'
     :'shadow-cus_sh_1'"
    > 
      <h2 class="text-lg overline">
        Objectives
      </h2>
      <p class="subpixel-antialiased leading-6">
        Our objectives include:

        Establishing and maintaining high-quality educational programs aligned with prescribed Standards of Learning.
        Delivering rigorous and relevant curricula tailored to meet student needs and preferences while addressing labor market demands.
        Providing state-of-the-art online facilities, equipment, and instructional technology to enhance the teaching-learning process.
        Cultivating strong relationships with students, parents, member schools, and the business community.
        Creating work-based experiences and apprenticeship opportunities that enrich academic learning and technical training.
        At Fellowship & Employment Center, we are dedicated to shaping future leaders who are equipped with the skills and knowledge to succeed in their chosen careers and contribute meaningfully to the advancement of society.
      </p>

      <p class="subpixel-antialiased leading-6">
        At Fellowship & Employment Center, we are dedicated to shaping future leaders who are equipped with the skills and knowledge to succeed in their chosen careers and contribute meaningfully to the advancement of society.
      </p>
    </div>

  </section>
</template>