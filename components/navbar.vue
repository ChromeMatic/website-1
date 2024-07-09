<script setup lang="ts">

    const motions = useMotions()
    type Links = {  name:string, path:string }

    let link:Links[] = [
        { name:"Home", path:"/"},
        { name:"About Us", path:"/about"},
        // { name:"Placement Services",path:"/register"}
    ]

    const theme = useThemeStore()
    let isDark = computed(()=>{ return theme.get_theme })

    let show = ref<boolean>(false)

    function open_menu(){ show.value = !show.value }
</script>

<template>
    <div 
     v-motion="Navbar_Animation"
     class="w-full flex flex-col p-1"
     :class="isDark ? 'bg-innerDark/30': 'bg-yellow-500/30'"
    >
        <nav
          v-motion="Navbar_Animation"
          class="w-full lg:p-2.5 p-2 rounded-md border-2 flex justify-between items-center font-semibold"
          :class="isDark ? 'bg-Dark text-teal-500 border-teal-900'
          :'bg-white border-green-300 text-teal-700'"
        >
          <div class="md:hidden flex">
            <button
                @click="open_menu()"
                class="w-full rounded-md border-2 lg:p-1.5 p-1"
                :class="isDark ? 'bg-innerDark border-teal-950'
                  :''"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
              >
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <h1 class="overline font-semibold lg:text-xl">
             Fellowship-Employment-Center
          </h1>

           <div class="hidden md:flex justify-center items-center space-x-8">
                <NuxtLink
                 v-for="path in link" :key="path.name"
                 :to="path.path"
                 class="border-2 py-1.5 px-4 rounded-md transition-all ease-in-out duration-700 hover:scale-125 
                 flex justify-center items-center space-x-2"
                 :class="isDark ? 'hover:border-green-500 hover:text-green-500 border-teal-900 bg-innerDark'
                 :'hover:border-green-500 hover:bg-green-500/10 hover:text-green-500'"
                >
                    <svg 
                     v-if="path.name === 'Home'"
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" 
                     fill="currentColor" 
                     class="size-4"
                    >
                     <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                     <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd" />
                    </svg>

                    <svg
                     v-if="path.name === 'About Us'" 
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" 
                     fill="currentColor" 
                     class="size-4"
                    >
                     <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
                    </svg>

                    <svg 
                     v-if="path.name === 'Placement Services'" 
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" 
                     fill="currentColor" 
                     class="size-6"
                    >
                     <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clip-rule="evenodd" />
                     <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>


                    <h1>
                        {{ path.name }}
                    </h1>
                </NuxtLink>

                <a
                 class="border-2 py-1.5 px-4 rounded-md transition-all ease-in-out duration-700 hover:scale-125 
                 flex justify-center items-center space-x-2"
                 :class="isDark ? 'hover:border-green-500 hover:text-green-500 border-teal-900 bg-innerDark'
                 :'hover:border-green-500 hover:bg-green-500/10 hover:text-green-500'"
                 href="https://docs.google.com/forms/d/e/1FAIpQLSfoeYk88CkudbbZThW3A4bo2polrzcAMBrDvAP9u3DnNwDohQ/viewform"
                 target="_blank"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                     <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
                     <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                    </svg>


                    <h1> Registration </h1>
                </a>
           </div>



           <button
             @click="theme.changeTheme()"
             class="border-2 p-1 rounded-md flex justify-center items-center transition-all ease-in-out
             duration-700"
             :class="isDark ? 'border-yellow-500 text-yellow-500 hover:bg-yellow-500/20'
             :'border-Dark text-innerDark hover:bg-Dark/20'"
           >     
                <svg 
                 v-if="isDark === true" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                 fill="currentColor" 
                 class="size-6 transition-all ease-in-out duration-700 hover:scale-125 hover:-translate-y-4"
                >
                    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>

                <svg
                 v-if="isDark === false" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24"
                 fill="currentColor" 
                 class="size-6 transition-all ease-in-out duration-700 hover:scale-125 hover:-translate-y-4"
                >
                    <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                </svg>

           </button>
        </nav>

        <!-- Dropdown -->
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
             rounded-md p-4 mt-1"
             :class="isDark ? 'bg-Dark text-white'
             :'bg-white'"
            >
               <NuxtLink
                 v-for="item in link"
                 :key="item.name"
                 :to="item.path"
                 class="transition-all ease-in-out duration-1000 rounded-md px-4 py-1
                 lg:hover:scale-110 border-2"
                 :class="isDark ? 'lg:hover:bg-white/20 backdrop-blur-sm lg:hover:border-teal-800 border-teal-900'
                 :'text-[#636B79] lg:hover:text-[#0E558E] lg:hover:border-[#0E558E] '"
                >
                    {{ item.name }}
               </NuxtLink>

               <a
                 class="border-2 py-1.5 px-4 rounded-md transition-all ease-in-out duration-700 
                 flex justify-center items-center space-x-2"
                 :class="isDark ? 'text-teal-500 border-teal-500':'text-teal-700'"
                 href="https://docs.google.com/forms/d/e/1FAIpQLSfoeYk88CkudbbZThW3A4bo2polrzcAMBrDvAP9u3DnNwDohQ/viewform"
                 target="_blank"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                     <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
                     <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                    </svg>


                    <h1> Registration </h1>
                </a>
            </div>
        </Transition>
    </div>
</template>