<template>
      <div class="card">
          <div class="layer"></div>
          <div class="content">

              <div class="image">
                  <a :href="url" target="_blank"><img :src="getImage.icon"/></a> 
 
              </div>
          </div>
      </div>

</template>

<script>
import { computed } from "vue";
export default {
props: {
    name: String,
    extension: String,
    url: String
},
setup(props) {
    const getImage = computed( ()=>{
        return {
            
            icon: require(`../../public/img/aliados/${props.name}.${props.extension}`),
        }
    })
    return{getImage}
}

   

}
</script>

<style lang="scss" scoped>

    .card{
            position: relative;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 300px;
            min-height: 300px;
            margin: 10px auto;
            background: $color-background-alterno;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,.4);
            overflow: hidden;
            &:hover{
                .layer{
                    top: 0;
                }
                .content{
                    .image{
                        background: none;
                        width: 180px;
                        height: 180px;
                    padding: 10px;
                                        border: 2px solid rgb(204, 204, 204);
                    box-shadow: 0 10px 40px rgba(0,0,0,.4);
                    }
                }

            }
            .layer{
                z-index: 1;
                position: absolute;
                top: calc(100% - 2px);
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient($color-primary, $color-secundary);
                transition: 0.5s;
            }
            .content{
                position: relative;
                z-index: 2;

                .image{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px;
                    width: 170px;
                    height: 170px;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.068);
                    border: 2px solid rgba(204, 204, 204, 0.5);
                    box-shadow: 0 10px 20px rgba(0,0,0, .2);
                    transition: .4s;
                    cursor: pointer;
                    &:hover{
                        transform: scale(0.9);
                    }
                    img{
                        width: 70%;
                        height: 70%;
                    }
                }
            }
        }
</style>