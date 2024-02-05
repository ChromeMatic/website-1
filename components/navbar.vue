<script setup lang="ts">

    const motions = useMotions()
    type Links = {  name:string, path:string }

    let link:Links[] = [
        { name:"Home", path:"#"},
        { name:"Mission", path:"#Mission_Vision"},
        { name:"About Us",path:"#about"},
        { name:"Objectives",path:"#objectives"}
    ]

    const theme = useThemeStore()
    let isDark = computed(()=>{ return theme.get_theme })

    let show = ref<boolean>(false)

    function open_menu(){ show.value = !show.value }
</script>

<template>
    <section
     v-motion="Navbar_Animation"
     class="flex flex-col space-y-3 w-full p-2 font-Rajdhani font-semibold"
     :class="isDark ? ' bg-innerDark'
     :'bg-pis'"
    >
        <nav
         class="w-full rounded-md py-2 px-4 flex justify-between items-center "
         :class="isDark ? 'bg-Dark text-white'
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
             @click="open_menu"
             class="md:hidden flex border-2 p-1"
             :class="isDark ? '':''"
            >
                <svg 
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                 stroke="currentColor" 
                 class="w-6 h-6"
                >
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

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

        <Transition
         :css="false"
         @leave="(_:any,done:any) => motions.div.leave(done)"
        >
            <div 
             v-if="show"
             v-motion="'div'"
             :initial="dropdown.initial"
             :enter="dropdown.enter"
             :leave="dropdown.leave"
             class="md:hidden flex flex-col justify-center items-center space-y-4 w-full 
             rounded-md p-4"
             :class="isDark ? 'bg-Dark text-white'
             :'bg-white'"
            >
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
        </Transition>


    </section>
</template>