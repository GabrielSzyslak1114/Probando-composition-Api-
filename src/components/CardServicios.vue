<template>
    <div :class="(item.id === btnMore ? 'card-servicios card-servicios-active' : 'card-servicios')"
    v-for="(item, index) in ServicesData" :key="index"
    >
        <div class="icon-card-servicios">
            <img src="../assets/izui3.jpg" alt="">
        </div>
        <div :class="(item.id === btnMore ? 'content-card-servicios content-card-servicios-active' : 'content-card-servicios')">
            <h3>{{item.nombre}}</h3>
            <p>{{item.details}}</p>
            <span>Productos</span>
            <ul>
                <li v-for="(product, index) in item.products" :key="index">-{{product}}</li>
            </ul>

        </div>
        <a :class="(item.id === btnMore ? 'more more-active' : 'more' )" @click="activarBtn(item.id)"></a>
    </div>



</template>

<script>

import {ref, computed} from 'vue'


export default {
    name:"CardServicios",
    
    setup(props){

        const btnMore = ref(null)
        const activarBtn = (i)=>{ 
            if(btnMore.value !== i){
                return btnMore.value = i
            }
            else{
                return btnMore.value = null
                }
    }  
    
   const seeMore = computed(()=> props.itemId === btnMore ? 'more more-active' : 'more' )
   // const card = computed(()=> btnMore.value ? 'card-servicios card-servicios-active' : 'card-servicios')
   // const contentCard = computed(()=> btnMore.value ? 'content-card-servicios content-card-servicios-active' : 'content-card-servicios')
        const ServicesData = [
             {   
        id: 1,
        categoria: "services",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora quis fugiat sunt, obcaecati fugit? ",
        products: ["Rapidminer", "i2"],
        nombre: "Analítica",
        precio: 10,
        imgurl: "http://picsum.photos/id/90/600"
    },
    {
        id: 2,
        categoria: "services",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora quis fugiat sunt, obcaecati fugit? ",
        products: ["IBM Datacap", "IBM ODM", "Red had ansible automation platform"],
        nombre: "Automatización", 
        precio: 50,
        imgurl: "http://picsum.photos/id/20/600"
    },

    {
        id: 3,
        categoria: "services",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora quis fugiat sunt, obcaecati fugit? ",
        products: ["Dermalog"],
        nombre: " Biometria", 
        precio: 14,
        imgurl: "http://picsum.photos/id/50/600"
    },
    {
        id: 4,
        categoria: "services",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora quis fugiat sunt, obcaecati fugit? ",
        products: ["Rapidminer"],
        nombre: "Comunicaciones", 
        precio: 0,
        imgurl: "http://picsum.photos/id/10/600"
    }
        ]
        return{activarBtn, btnMore, seeMore, ServicesData}
    } 

}
</script>

<style lang="scss" scoped>
        .card-servicios{
            position: relative;
            width: 300px;
            padding: 20px;
            margin: 20px;
            background: $color-background-alterno;
            &:before{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                border: 20px solid transparent;
                border-top: 20px solid $color-primary;
                border-right: 20px solid $color-primary;
            }
    

            
            .icon-card-servicios{
                margin-bottom: 10px;

                img{
                    max-width: 90px;
                }
            }
            .content-card-servicios{
                position: relative;
                height: 150px;
                overflow: hidden;
                transition: .3s;
                transform: scale(1);
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100px;
                    background: linear-gradient(transparent, $color-background-alterno);
                }
                h3{
                    color: $color-text-primary;
                    font-size: 1.4em;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                p{
                    font-weight: 300;
                    color: $color-text-secundary;
                    margin-bottom: 25px;
                }
                span{
                    font-weight: 400;
                    font-size: 1.2em;
                    color: $color-text-secundary;
                    margin-bottom: 10px;

                    
                }
                ul{
                    li{
                    font-weight: 300;
                    color: $color-text-secundary;
                    margin: 5px 0;
                    }
                }
            }
            .more{
                position: relative;
                padding: 10px 15px;
                background: $color-primary;
                margin-top: 15px;
                display: inline-block;
                cursor: pointer;
                text-transform: uppercase;
                color: #383838;
                font-weight: 500;
                letter-spacing: 2px;
                font-size: 1em;
                transition: 0.3s;
                &:hover{
                    background: $color-secundary; 
                    color: $color-text-primary;
                    transition: 0.3s ease-in;

                }
                &::before{
                    content: 'ver mas';

                }
            }
                .more-active{
                    content: 'Ver menos' !important;
                    background: $color-secundary;
                    color: $color-text-primary;
                    &::before{
                    content: 'ver menos';

                }
                }
        }
        .card-servicios-active{
            &::before{
                border-top: 20px solid $color-secundary;
                border-right: 20px solid $color-secundary;               
            }
        }
    
    .content-card-servicios-active{
        height: auto !important;
            transition: .4s ease;
            transform: scale(0.9) !important;
            &::before{
            background: none !important;
                }
    }
</style>