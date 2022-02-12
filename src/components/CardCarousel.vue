<template>
  <Carousel :itemsToShow="2.95" :wrapAround="true">
    <Slide  v-for="image in aliados " :key="image.id">
      <div class="carousel__item"  >
        <Alianzas :name="image.name" :extension="image.extension" :url="image.imgurl" />
      </div>

    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import Alianzas from '../components/Alianzas.vue';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Alianzas
  },
  setup(props) {
       const aliados = ref([
    {
      id: 1,
      name: 'android',
      extension: 'png',
      imgurl: "http://www.android.com"
    },
    {
      id: 2,
      name: 'facebook',
      extension: 'png',
      imgurl: "http://www.facebook.com"
    },
    {
      id: 3,
      name: 'google-play',
      extension: 'png',
      imgurl: "http://www.playStore.com"
    },
    {
      id: 4,
      name: 'huawei',
      extension: 'png',
      imgurl: "http://www.huawei.com"
    }
  ]);
  return{aliados}
  }

});
</script>

<style scoped>
.carousel__slide {
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;

}

.carousel__slide > .carousel__item {
  transform: scale(0.9);
  opacity: 0.5;
  transition: 0.5s;
   z-index: 0;
   margin: 0 20px;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
  z-index: 1;
  transform: scale(0.9);

}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);

}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);

}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, .4);
}
</style>