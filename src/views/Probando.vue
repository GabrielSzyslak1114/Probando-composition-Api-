
<template>
  <div class="home">
    <Carousel
      class="carousel"
      :timeout="5000"
      navigation
      pagination
      startAutoPlay
      v-slot="{ currentSlide }"
    >
      <Slide
        v-for="item of CarouselSlides"
        :key="item.id"
      >
        <div class="slide-info" v-show="currentSlide === item.id">
          <img :src="require(`../assets/${item.name}.${item.extension}`)" alt="slide">
            <div class="text-content">
          <h2>{{item.name}}</h2>
            </div>

        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>

import Carousel from '../components/Carousel.vue';
import Slide from '../components/Slide.vue';
import CarouselSlides  from '@/assets/js/data.js';
export default {
    components:{
        Carousel, Slide
    },
    setup(props) {
      const CarouselSlides = CarouselSlides
      return{CarouselSlides}
    }
    
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>

.carousel {
  position: relative;
  max-height: 70vh;
  height: 70vh;
  width: 100%;
  .slide-info {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text-content{
        position: absolute;
        display: flex;
        width: 90%;

        h2{
    z-index: 10000;
    font-size: 4em;
    font-weight: 700;
    color: cornsilk;
}
    }
  }
}
</style>