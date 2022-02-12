<template>
  <section class="body-footer">
       <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Navegación</h4>
  	 			<ul>
  	 				<li><a href="/">Inicio</a></li>   
                    <li><a href="/#Nosotros" >Nosotros</a></li>            
  	 				<li><a href="/#Soluciones">Servicios</a></li>
  	 				<li><a href="/#Alianzas">Alianzas</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contacto</h4>
  	 			<ul>
  	 				<li> <a href="/contacto">Contacto</a> </li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Aliados</h4>
  	 			<ul>
  	 				<li><a href="http://www.android.com">Android</a></li>
  	 				<li><a href="http://www.facebook.com">Facebook</a></li>
  	 				<li><a href="http://www.playStore.com">Play Store</a></li>
  	 				<li><a href="http://www.huawei.com">Huawei</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Redes sociales</h4>
  	 			<div class="social-links">
  	 				<a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a>
  	 				<a href="http://www.instagram.com"><i class="fab fa-instagram"></i></a>
  	 				<a href="http://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
      <div class="wave">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    .body-footer{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center ;

        .wave{
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: $color-primary;    
            span{
                position: absolute;
                width: 325vh;
                height: 325vh;
                top: 0;
                left: 50%;
                transform: translate(-50%, -70%);
                background: #000;
                &:nth-child(1){
                    animation: animate 5s linear infinite;
                    border-radius: 45%;
                    background: rgba(20,20,20,1);
                }
                &:nth-child(2){
                    animation: animate 10s linear infinite;
                    border-radius: 45%;
                    background: rgba(20,20,20,.5);
                }
                 &:nth-child(3){
                    animation: animate 15s linear infinite;
                    border-radius: 45%;
                    background: rgba(20,20,20,0.5);
                }

            } 
        }
        .content{
            position: relative;
            z-index: 1;
            color: $color-text-primary;
            font-size: 4em;
        }
    }

    @keyframes animate {
        0%{
            transform: translate(-50%, -75%) rotate(0deg);
        }
        100%{
            transform: translate(-50%, -75%) rotate(360deg);
        }
    }


    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
.container{
	width: 80%;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
    background-color: #24262b85;
    position: absolute;
    padding: 70px 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: $color-text-primary;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: $color-secundary;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: $color-text-secundary;
	text-decoration: none;
	font-weight: 300;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: $color-text-primary;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: $color-text-primary;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: $color-background;
	background-color: $color-text-primary;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}





</style>