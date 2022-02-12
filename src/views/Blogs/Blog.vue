<template>
  <Banner :titulo="'The Pegasus Group Company S.A'" 
  :subTitulo="'Enfocados en soluciones de análisis investigativo para el mundo policial y la comunidad de inteligencia.'"
  :urlBtn="'/'" :textoBtn="'Inicio'"
  />

    <section class="body-articulo">
    <main class="content-articulo">
 
    <section class="body-product-info">
  <main class="container-product-info">
      <div class="imgBx">
          <img src="../../assets/izui.jpg" alt="">
      </div>
        <div class="details-content">
            <div class="content">
                <h2>{{arrayData.title}}<br><span>Blog</span></h2>
                <p>{{arrayData.body}}.</p>

            </div>
        </div>
  </main>
</section>
    </main>


    </section>




</template>

<script>

import Banner from '../../components/Banner.vue';
import TitleNeon from '../../components/TitleNeon.vue';



//import { onMounted } from '@vue/runtime-core';
import { useFetch } from '../../hooks/useFetch';
export default {
  components: { Banner, TitleNeon},
   props:['id'],
    setup(props){
       // const nombreParams = useRoute()
        // console.log(nombreParams.params.nombre)
       // const store = useStore()
        //Trayendo datos del blog
        const {arrayData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
            

        //const destacados = computed(()=> store.state.blog.slice(3,7))

        return{arrayData}
         
    }
}
</script>

<style lang="scss">

.body-card{
    display: flex;
    justify-content: center;
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

.body-articulo{
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content-articulo{
        margin: 0 4%;
            width: 100%;

    }
}



.body-product-info{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
}

.container-product-info{
    position: relative;
    display: flex;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: $color-alterno;
    margin: 20px;
}

.container-product-info .imgBx{
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background: $color-primary;
}

.container-product-info .imgBx:before{
    content: 'Blog';
    position: absolute;
    top: 20px;
    left: 20px;
    color:$color-text-secundary;
    opacity: 0.2;
    font-size: 9em;
    z-index: 100;
}

.container-product-info .imgBx img{
    position: relative;
    width:100%;
    height: 100%;
}

.container-product-info .details-content{
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    padding: 50px 20px;
}

.container-product-info .details-content h2{
    margin: 0;
    padding: 0;
    font-size: 2.5em;
    line-height: 0.8em;
    color: #444;
    text-transform: uppercase;
}

.container-product-info .details-content h2 span{
    font-size: 0.4em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
}

.container-product-info .details-content p{
    max-width: 85% ;
    margin-left: 15%;
    color: $color-text-secundary;
    font-size: 15;
}

</style>