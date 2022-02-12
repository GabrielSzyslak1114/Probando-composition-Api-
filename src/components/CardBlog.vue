<template>
    <div class="card-blog"  >
        <span class="fondo-opacity"></span>
        <picture class="imgBx">
            <img src="../assets/izui.jpg" alt="">
        </picture>
        <div class="content">
            <div>
                <h2>{{blog.id}}. {{blog.title}}</h2>
                <p>details</p>
                <router-link class="button" :to="`/blogs/${blog.id}`" >Ver más</router-link>
            </div>
        </div>
    </div>    


</template>

<script>
export default {
    props:{
        blog: Object
    }
    
}
</script>

<style lang="scss" scoped>

        .card-blog{
            position: relative;
            width: 320px;
            height: 420px;
            margin: 15px;
            overflow: hidden;
            border-radius: 10px;
                &:hover{
                    .content{
                        div{
                            visibility: visible;
                            opacity: 1;
                            transform: translateY(0px);
                        }
                    }
                    .fondo-opacity{
                    top: 0;
                    }
                }
                .fondo-opacity{
                z-index: 1;
                position: absolute;
                top: calc(100% - 4px);
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.4;
                background: linear-gradient($color-primary, $color-secundary);
                transition: 0.3s;
                }
                .imgBx{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                        img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .content{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10;

                        div{
                            padding: 40px;
                            color: $color-text-primary;
                            visibility: hidden;
                            opacity: 0;
                            transform: translateY(50px);
                            transition: .2s;

                            h2{
                                margin: 8px 0;
                            }
                            p{
                                text-align: justify;
                            }
                            .button{
                                color: $color-text-primary;
                                background: $color-primary;
                                font-size: 1em;
                                margin: 12px 0px 0px;
                                font-weight: 500;
                                padding: 10px 30px;
                                display: inline-block;
                                text-decoration: none;
                                border-style: none;
                                transition: 0.3s;
                                &:hover{
                                    background: $color-secundary;
                                    transition: 0.3s ease-in;
                                }
                            }
                        }
                }
        }


</style>