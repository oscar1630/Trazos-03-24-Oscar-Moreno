<?php
$pagina ="INICIO";
include "./php/header.php";
include "./php/galeria.php";
?>
<!--Cuerpo inicio-->
<section class="categorias">
    <h2 class="categorias__titulo">COMPRAR POR CATEGORIA</h2>
    <div class="categorias__bloque">
        <div class="categorias__card">
            <a class="categorias__foto" href="./tienda.php?cat=mujer">
                <img src="./images/catujer.avif" alt="">
                
            </a>
            <a class="categorias__btn" href="./tienda.php?cat=mujer">
                <h3>COMPRAR PARA MUJER</h3>
            </a>
        </div>
        <div class="categorias__card">
            <a class="categorias__foto" href="./tienda.php?cat=hombre">
                <img src="./images/cathombre.avif" alt="">
                
            </a>
            <a class="categorias__btn" href="./tienda.php?cat=hombre">
                <h3>COMPRAR PARA HOMBRE</h3>
            </a>
        </div>
        <div class="categorias__card">
            <a class="categorias__foto" href="./tienda.php?cat=infantil">
                <img src="./images/catniño.avif" alt="">
                
            </a>
            <a class="categorias__btn" href="./tienda.php?cat=infantil">
                <h3>COMPRAR PARA NIÑO</h3>
            </a>
        </div>
    </div>
</section>

<?php
include "./php/footer.php"
?>