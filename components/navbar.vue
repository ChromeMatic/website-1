<script setup lang="ts">
    type Links = {  name:string, path:string }

    let link:Links[] = [
        { name:"Home", path:"#"},
        { name:"Mission", path:"#mission"},
        { name:"Vision",path:"#vision"},
        { name:"Objectives",path:"#obj"},
        { name:"About Us",path:"#about"}
    ]

    const theme = useThemeStore()
    let isDark = computed(()=>{ return theme.get_theme })
</script>

<template>
    <section
     v-motion="Navbar_Animation"
     class="flex w-full p-2 font-Rajdhani font-semibold"
     :class="isDark ? ' bg-[#191919]'
     :'bg-[#DCBA9D]'"
    >
        <nav
         class="w-full rounded-md py-2 px-4 flex justify-between items-center "
         :class="isDark ? 'bg-[#202124] text-white'
         :'bg-white'"
        >

            <div>
              <h1>
                Logo
              </h1>
            </div>

            <div class="hidden md:flex justify-center items-center space-x-4">
                <a
                 v-for="item in link"
                 :key="item.name"
                 :href="item.path"
                 class="transition-all ease-in-out duration-1000 rounded-md px-4 py-1
                 lg:hover:scale-110 border-2"
                 :class="isDark ? 'lg:hover:bg-white/20 backdrop-blur-sm lg:hover:border-teal-800 border-teal-900'
                 :'text-[#636B79] lg:hover:text-[#0E558E] lg:hover:border-[#0E558E] '"
                >
                    {{ item.name }}
                </a>
            </div>

            <button
             @click="theme.changeTheme()"
             class="border-2 transition-all ease-in-out duration-500 rounded-md px-4 py-1 lg:hover:scale-110"
             :class="isDark ? 'lg:hover:bg-yellow-500/20 backdrop-blur-sm lg:hover:border-yellow-500 border-teal-900'
             :''"
            >
                <h1 v-if="isDark === false">
                  🌑
                </h1>
                
                <h1 v-if="isDark === true">
                 🌤️
                </h1>
            </button>

        </nav>
    </section>
</template>