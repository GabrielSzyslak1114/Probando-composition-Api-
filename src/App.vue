<template>

  <section class="body-page">
  <router-view/>
  </section>
  <Footer/>
</template>
<script>

import Footer from './components/Footer.vue';

export default {
  components:{
    Footer
  }
}
</script>
<style lang="scss" >

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body{

  background: $color-background;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.body-page{
      width: 100%;
    padding: 0 60px 0 0;

      @media (max-width: 770px) {
        padding: 0 0 0 0px;
      
    }
}


</style>
