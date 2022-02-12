<template>
    <main class="body-title-neon">
        <div class="box-title-neon">
            <div class="lightbar"></div>
            <div class="topLayer"></div>
            <h2>{{titulo}}</h2>
            <h3>{{subtitulo}}</h3>
        </div>
    </main>

</template>

<script>
export default {
    props: {
        titulo: String,
        subtitulo: String
    }
}
</script>

<style lang="scss" scoped>
.body-title-neon{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 180px;
    background: $color-background;
    overflow: hidden;
    @media (max-width: 792px) {
    justify-content: center; 
    }

    .box-title-neon{
        position: relative;
        width: 500px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 3%;
        @media (max-width: 792px) {
        align-items: center; 
            }

        h2{
            color: $color-text-primary;
            font-size: 3em;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-shadow: 0 0 10px $color-primary,
                        0 0 20px $color-primary,
                        0 0 40px $color-primary;
            @media (max-width: 770px) {
                font-size: 2.5em;
                text-align: center;
            }
            @media (max-width: 450px) {
            font-size: 2.1em;
            }
        }
        h3{
            margin-top: 4px;
            color: $color-text-secundary;
            font-size: 1em;
            font-weight: 500;
            letter-spacing: 0.1em; 
            text-align: center;
            @media (max-width: 792px) {
            text-align: center;
            font-size: 0.9em;
                margin: 0 20px;
            }
            @media (max-width: 450px) {
            font-size: 0.8em;
            }
        }

    }
}


        .lightbar{
            position: absolute;
            top: 0;
            left: 0;
            width: 10px;
            height: 100%;
            border-radius: 10px;
            background: $color-alterno;
            z-index: 20;
            box-shadow: 0 0 10px $color-primary,
                        0 0 20px $color-primary,
                        0 0 40px $color-primary;
            animation: animatelightbar 5s linear infinite;
            @media (max-width: 500px) {
            display: none;
            }
        }

        .topLayer{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: $color-background;
            animation: animatetopLayer 10s linear infinite;
            @media (max-width: 500px) {
            display: none;
            }
        }

        @keyframes animatelightbar {
            0%, 5%{
                transform: scaleY(0) translateX(0);
            }
            10%{
               transform: scaleY(1) translateX(0); 
            }
            90%{
                //  600px de.box-title-neon - 10px del lightbar
               transform: scaleY(1) translateX(calc(500px - 10px)); 
            }
            95%, 100%{
               transform: scaleY(0) translateX(calc(500px - 10px)); 
            }
        }



        @keyframes animatetopLayer {
            0%,2.5%{
                transform: translateX(0);
            }
            5%{
               transform: translateX(0); 
            }
            45%{
                //  600px de.box-title-neon - 10px del lightbar
               transform:  translateX(100%); 
            }
            47.5%,50%{
               transform: translateX(100%); 
            }


            50.001%,52.5%{
                transform: translateX(-100%);
            }
            55%{
               transform: translateX(-100%); 
            }
            95%{
                //  600px de.box-title-neon - 10px del lightbar
               transform:  translateX(0%); 
            }
            97.5%, 100%{
               transform: translateX(0%); 
            }
        }
</style>