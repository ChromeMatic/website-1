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
     :class="isDark ? ''
     :'bg-[#DCBA9D]'"
    >
        <nav
         class="w-full rounded-md py-2 px-4 flex justify-between items-center "
         :class="isDark ? ''
         :'bg-white'"
        >

            <div>
              <h1>
                Logo
              </h1>
            </div>

            <div class="flex justify-center items-center space-x-4">
                <a
                 v-for="item in link"
                 :key="item.name"
                 :href="item.path"
                 class="transition-all ease-in-out duration-500 rounded-sm px-4 py-1"
                 :class="isDark ? ''
                 :'text-[#636B79] lg:hover:text-white lg:hover:bg-[#0E558E]'"
                >
                    {{ item.name }}
                </a>
            </div>

        </nav>
    </section>
</template>