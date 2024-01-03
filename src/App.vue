<template>   
 <navigation/>

  <router-view/>
  <body>
    <Blogpost/>
  </body>

  <Footer/>


</template>
<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Blogpost from "./components/Blogpost";
export default {
  components: { Navigation,Footer,Blogpost},
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
