<template>
 
  <!-- <img src="@/assets/background.png" alt="Background" class="w-full h-full object-cover" />
   -->
   <div class="flex flex-row items-center justify-items-center">
  <div>
    <img class="w-10" src="@/assets/logo.png" alt="Logo">
  </div>
  <div class="flex items-center justify-items-center mx-auto">
    <h1 class="text-red-500 font-extrabold">Welcome To TechCrunch</h1>
  </div>
</div>





    
 <navigation/>
  <router-view/>

 
</template>
<script>
import Navigation from "./components/Navigation";
export default {
  components: { Navigation},
  data() {
    return {
     
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
