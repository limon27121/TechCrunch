<template lang="">
  <nav bg-gray-800 p-4>
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="text-white text-lg font-semibold hover:bg-sky-700 hover:ring hover:ring-black">Home</router-link>
      <router-link to="#" class="text-white hover:ring hover:ring-black hover:bg-sky-700">
  Blogs
</router-link>
        <router-link to="#" class="text-white hover:bg-sky-700 hover:ring hover:ring-black">Create Post</router-link>
        <router-link to="#" class="text-white hover:bg-sky-700 hover:ring hover:ring-black">Login/Register</router-link>
      </div> 
  </nav>

</template>
<script>
export default {
    name: "navigation",
}
</script>
<style lang="">
    
</style>