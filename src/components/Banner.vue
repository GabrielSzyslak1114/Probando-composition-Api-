<template>
 <section class="banner-section">
   <div class="logo"><router-link to="/">Creative</router-link></div>
   <img src="../assets/planet.jpeg" alt="" class="bg">
   <div class="content" >
     <h2>{{titulo}}</h2>
     <p>{{subTitulo}}</p>
      <Boton :urlBtn="urlBtn" :textoBtn="textoBtn"/>
   </div>  
   <p class="copyright">2022. Gabriel Rodriguez</p>
 </section>
 <div :class="menuActive" @click="toggleMenu"></div>
 <div :class="navigationActive">
   <ul>
    <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
    <li><router-link to="/#Blogs" @click="toggleMenu">Blogs</router-link></li>
    <li><router-link to="/#Soluciones" @click="toggleMenu">Soluciones</router-link></li>
    <li><router-link to="/#Alianzas" @click="toggleMenu">Alianzas</router-link></li>
    <li><router-link to="/contacto" @click="toggleMenu">Contáctanos</router-link></li>
        
   </ul>
   <div class="redesSocials">
     <ul>
       <li><router-link to="#"><img src="../assets/icons/facebook.png"></router-link></li>
       <li><router-link to="#"><img src="../assets/icons/instagram.png"></router-link></li>
      <li><router-link to="#"><img src="../assets/icons/twitter.png"></router-link></li>
     </ul>

   </div>
 </div>
</template>

<script>
import Boton from './Boton.vue'
export default {
  components: { Boton },
  props: {
    titulo: String,
    subTitulo: String,
    body: String,
    urlBtn: String,
    textoBtn: String
  },
  data() {
    return {
      menu: true
    }
  },
  methods:{
    toggleMenu(){
      this.menu = !this.menu
    }
  },
  computed:{
    menuActive(){
      return this.menu ? 'menutoggle' : 'menutoggle menuactive'
    },
    navigationActive(){
      return this.menu ? 'navigation' : 'navigation active'
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-section{
  padding: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient($color-primary, $color-secundary);
    @media  (max-width: 770px) {
    padding: 100px 40px;
    min-height: 720px !important;
    }
    .logo{
    position: fixed;
    top: 30px;
    z-index: 100;
    cursor: pointer;
    @media  (max-width: 770px) {
      top: 10px;
      font-size: 1.3em;
  }


      a{
      text-decoration: none;
      color: $color-text-primary;
      font-weight: 700;
      font-size: 2em;
      }
    }

    .bg{
    position: absolute;
    top: 0;
    right: 60px;
    height: 100%;
    width: 600px;

    @media  (max-width: 770px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
  }

    }
    .content{
    position: relative;
    max-width: 650px;
    z-index: 1;
      h2{
        color: $color-text-primary;
        font-size: 3em;
        font-weight: 700;
        line-height: 1.1em;
        @media  (max-width: 770px) {
          font-size: 2.5em;
        }

        }
      p{
        color: $color-text-primary;
        font-size: 1.1em;
        margin: 20px 0 10px;
        }
    }
}


.copyright{
  position: absolute;
  bottom: 20px;
  color: $color-text-primary;
  font-size: 1.1em;
  margin: 20px 0px 10px;
}

.menutoggle{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
  width: 60px;
  height: 60px;
  background: $color-primary;
  cursor: pointer;
  transition: 0.2s;
  z-index: 1000;
  &::before{
      content: '';
  position: absolute;
  width: 28px;
  height: 2px;
  background: $color-alterno;
  transition: .2s;
  transform: translateY(-10px);
  box-shadow: 0 10px 0 $color-alterno; /*linea en medio*/
  }

  &::after{
  content: '';
  position: absolute;
  width: 28px;
  height: 2px;
  background: $color-alterno;
  transition: .2s;
  transform: translateY(10px);
}
}


.menuactive{
  background: $color-secundary;
    &::before{
      transform: translateY(0px) rotate(45deg);
      box-shadow: 0 0 0 $color-alterno;
    }
    &::after{
      transform: translateY(0px) rotate(-45deg);
    }
}

.navigation{
  position: fixed;
  top: 0;
  left: calc(100% - 60px); /* estar 100 hacia left menos 60px de .redesSocials */
  width: 100%;
  height: 100%;
  background: $color-alterno;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  @media  (max-width: 770px) {
    left: 100%;
  }

      ul{
      position: relative;

    li{
      position: relative;
      list-style: none;
      text-align: center;

        a{
        font-size: 2.5em;
        color: #111;
        text-decoration: none;
        font-weight: 300;
        @media  (max-width: 770px) {
          font-size: 1.2em;
        }

          &:hover{
          color: $color-secundary;
          }
        }
      }
    }
}

.active{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $color-alterno;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  @media  (max-width: 770px) {
  left: 0%;
  }
}






.redesSocials{
  position: absolute;
  top: 0;
  left: 0px;
  width: 60px;
  height: 100%;
  border-right: 1px solid rgba(0,0,0, .1);
  border-left: 1px solid rgba(0,0,0, .1) ;
  display: flex;
  align-items: center;
  justify-content: center;

    ul{
    position: relative;

      li{
      position: relative;
      list-style: none;

        
        a{
          position: relative;
          display: inline-block;
        }
      }
    }

}







</style>