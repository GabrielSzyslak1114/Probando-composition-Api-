<template>
  <Banner :titulo="'The Pegasus Group Company S.A'" 
  :subTitulo="'Enfocados en soluciones de análisis investigativo para el mundo policial y la comunidad de inteligencia.'"
  :urlBtn="'/contacto'" :textoBtn="'Contacto'"
  />

  <section class="body-card" id="Blogs">
    <TitleNeon :titulo="'Destacados'" :subtitulo="'Articulos, entrevistas y apariciones en medios'"/>
    <main class="container-cards">
      <CardBlog v-for="(blog, index) in destacados" :key="index" :blog="blog"/>
    </main>
  </section>
    <section class="body-nosotros" id="Nosotros">
      <TitleNeon :titulo="'Nosotros'"/>
      <Nosotros/>
    </section>

  <section class="body-card" id="Soluciones">
    <TitleNeon :titulo="'Soluciones'" :subtitulo="'Representaciones con productos de primer nivel'"/>
    <main class="container-cards" >
      <CardServicios/>
    </main>
  </section>

  <section class="body-card" id="Alianzas">
    <TitleNeon :titulo="'Alianzas'" :subtitulo="'Trabajamos por un compromiso en común, la confianza'"/>
    <main :class="['container-cards','container-card-alianzas']">
      <CardCarousel />
    </main>
  </section>

</template>

<script>
import Banner from '../components/Banner.vue'
import {useStore} from 'vuex'
import {computed, onMounted} from 'vue'
import TitleNeon from '../components/TitleNeon.vue'
import CardBlog from '../components/CardBlog.vue'
import Nosotros from '../components/Nosotros.vue'
import CardServicios from '../components/CardServicios.vue'
import Alianzas from '../components/Alianzas.vue'
import CardCarousel from '../components/CardCarousel.vue'


export default {
  components: { CardBlog, 
  CardServicios, 
  TitleNeon, 
  Alianzas, 
  Banner, 
  Nosotros,
  CardCarousel,
  
  },
  setup(){
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchApi')
    });
    const destacados = computed(()=> store.state.blog.slice(3,7))

    return{destacados}
    
  }
}
</script>

<style lang="scss" >
.body-card{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    min-height: 600px;
    flex-wrap: wrap;
    padding: 1%;
    @media (max-width: 770px) {
      padding: 0%;
      margin: 0 0 60px;
    }
}
  .container-cards{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 570px;
    width: 100%;
    flex-wrap: wrap;
    }

    .container-card-alianzas{
      overflow: hidden;
      max-width: 100%;
    }

        .body-nosotros{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        @media (max-width: 770px) {
        margin: 10px 0 60px;
    }
        }
        #container-clientes{
          margin: 110px 0 0px;
          @media (max-width: 770px) {
          margin: 0px;
    }
        }



</style>