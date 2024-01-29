<script setup lang="ts">

</script>

<template>
    <section
     class="w-full h-screen flex flex-col space-y-1"
    >

     <div class="w-full sticky top-0 z-10">
        <navbar/>
     </div>

     <section class="flex w-full space-x-2 px-2 py-4 bg-gray-100">

        <div 
         v-motion="Card_Animation(-50,375)"
         class="flex h-64 bg-white w-full rounded-md border-2 border-teal-100"
        >

        </div>

        <div 
         v-motion="Card_Animation(50,375)"
         class="flex h-64 bg-white w-full rounded-md border-2 border-teal-100"
        >

        </div>

     </section>

    </section>
</template>