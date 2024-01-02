<template lang="">
  <header class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
    <p class="ring ring-blue-500 ring-offset-2 p-4">TechCrunch</p>
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li class="lg:mr-12 hover:bg-sky-700 hover:ring hover:ring-black text-lg"> <router-link to="/">Home</router-link></li>
      <li class="lg:mr-12 hover:bg-sky-700 hover:ring hover:ring-black text-lg"><router-link to="#">Blogs</router-link></li>
      <li class="text-lg lg:mr-12 hover:bg-sky-700 hover:ring hover:ring-black"><router-link to="#">Create Post</router-link></li>
      <li class="text-lg lg:mr-12 hover:bg-sky-700 hover:ring hover:ring-black"><router-link to="#">Login/Register</router-link></li>
    </ul>
  </nav>
</header>

  

</template>
<script>
export default {
    name: "navigation",
}
</script>
<style lang="">
    
</style>