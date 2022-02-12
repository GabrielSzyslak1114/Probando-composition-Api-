<template>
      <main class="nosotros-vista">
          <div class="card">
              <img src="../assets/logo.png" alt="">
          </div>
          <div class="card">
            <div class="content">
                <h2>The Pegasus Group Company S.A</h2>
                <p>Es fundada a comienzos del año 2007 con foco en soluciones de análisis investigativo para el mundo policial
                    y comunidad de inteligencia, mediante tecnologías de vanguardia mundialmente reconocidas.
                </p>
            </div>
          </div>
      </main>
      <main class="nosotros-vista">
          <div class="card">
              <img src="../assets/logo.png" alt="">
          </div>
          <div class="card">
            <div class="content">
                  <h2>Misión</h2>
                  <p>Acelerar la misión de nuestros clientes a través de una combinación de soluciones 
                      tecnologicas, robustas y un capital humano de excelencia.
                  </p>
                  <br>
                    <h2>VIsión</h2>
                  <p>Ser la empresa tecnológica más relevante en el sector público en Chile.
                  </p>
            </div>
          </div>
      </main>
</template>

<script>

export default {

}
</script>

<style lang="scss">

    .nosotros-vista{
        height: 450px;
        width: 100%;
        display: flex;
        margin: 5px 0;
        @media (max-width: 770px) {
                flex-direction: column !important;
                align-items: center;
                margin: 50px 0;
            }
        
        &:nth-child(2){
            flex-direction: row-reverse;
        }

        .card{
            display: flex;
            align-items: center;
            padding: 1% 5%;
            width: 50%;
            height: 100%;
            .content{
                @media (max-width: 770px) {
                    text-align: center;
                }
                h2{
                    color: $color-text-primary;
                    font-size: 3em;
                    font-weight: 700;
                    line-height: 1.1em;
                    @media (max-width: 770px) {
                        font-size: 2.5em;
                    }
                    @media (max-width: 450px) {
                        font-size: 2.1em;
                    }
                }
                p{
                    color: $color-text-secundary;
                    font-size: 1.1em;
                    margin: 20px 0 10px;
                    @media (max-width: 792px) {
                    font-size: 0.9em;
            }
                    @media (max-width: 450px) {
                    font-size: 0.8em;
            }
                }
            }
        @media (max-width: 770px) {
                width: 90%;
                justify-content: center;
            }
        }
    }
    
</style>