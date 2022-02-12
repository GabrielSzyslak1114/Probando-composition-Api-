<template>
<Banner :titulo="'Somos tu mejor opción'"
  :urlBtn="'/'" :textoBtn="'Inicio'"
/>
    <section class="body-contacto">
  <main class="imgBx">
      <img src="../assets/planet.jpeg" alt="">
  </main>
  <main class="contentBx">
      <div class="formBx">
          <h2>Contáctanos</h2>
          <form action="">
              <div class="inputBx">
                  <span>Nombre</span>
                  <input type="text">
              </div>
                <div class="inputBx">
                  <span>Email</span>
                  <input type="email">
                </div>

                <div class="inputBx">
                  <span>Mensaje</span>
                  <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
                </div>

                <div class="inputBx">
                  <input type="submit" value="Enviar">
                </div>
          </form>
      </div>
  </main>
  </section>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
    components:{
        Banner
    }
}
</script>

<style lang="scss" scoped>
.body-contacto{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    background: $color-alterno;
    @media (max-width: 750px) {
        height: 1000px;
    }

    .imgBx{
        position: relative;
        width: 50%;
        height: 100%;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: linear-gradient(255deg, $color-primary, $color-secundary);
            mix-blend-mode: screen;
        }
        @media (max-width: 770px) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .contentBx{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        @media (max-width: 770px) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .formBx{
            width: 50%;
            @media (max-width: 770px) {
                width: 100%;
            
                padding: 40px;
                background: rgb(255 255 255 / 0.7);
                margin: 50px;
                border-radius: 10px;
            }

            h2{
                color: $color-secundary;
                font-weight: 600;
                font-size: 1.5em;
                text-transform: uppercase;
                margin-bottom: 20px;
                border-bottom: 4px solid $color-secundary;
                display: inline-block;
                letter-spacing: 1px;
            }
            .inputBx{
                margin-bottom: 20px;
                span{
                    font-size: 1.2em;
                    margin-bottom: 5px;
                    display: inline-block;
                    color: #607d8b;
                    font-weight: 300;
                    letter-spacing: 1px;
                }
                input, textarea{
                    width: 100%;
                    padding: 10px 20px;
                    outline: none;
                    font-weight: 400;
                    border: 1px solid #607d8b;
                    font-size: 16px;
                    letter-spacing: 1px;
                    color: #607d8b;
                    background: transparent;
                    border-radius: 30px;
                }
                input[type="submit"]{
                    background: $color-secundary;
                    color: $color-text-primary;
                    outline: none;
                    border: none;
                    font-weight: 500;
                    cursor: pointer;

                    &:hover{
                        background: $color-primary;
                    }
                }
            }
        }

    }
}


</style>