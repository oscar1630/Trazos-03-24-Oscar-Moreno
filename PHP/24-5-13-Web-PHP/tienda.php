<?php
$pagina ="TIENDA";
include "./php/header.php";

if(isset($_GET["cat"])){
    $categoria = $_GET["cat"];
} else{
    $categoria ="Todos los Productos";
}
?>
<!--Cuerpo inicio-->
<h1>Tienda - Categoria: <?php echo $categoria ?></h1>

<section class="productos">
    <h2 class="productos__titulo">SUDADERAS MUJER</h2>
        <div class="productos__bloque">
            <!--producto1-->
            <div class="productos__card">               
                <a href="./productos.php"><img src="./images/mujer1.avif" alt=""></a>
                <div class="productos__detalle">
                    <h3 class="productos__nombre">SUDADERA DE MUJER DE PIQUÉ DE DOBLE CARA CON CUELLO REDONDO</h3>
                    <p class="productos__precio">140.00 €</p>
                    <a href="" class="productos__btn">Comprar</a>
                </div>
            </div>
            <!--producto2-->
            <div class="productos__card">               
                <a href="./productos.php"><img src="./images/mujer2.avif" alt=""></a>
                <div class="productos__detalle">
                    <h3 class="productos__nombre">SUDADERA JOGGER DE MUJER LACOSTE EN FELPA SIN CEPILLAR</h3>
                    <p class="productos__precio">120.00 €</p>
                    <a href="" class="productos__btn">Comprar</a>
                </div>
            </div>
            <!--producto3-->
            <div class="productos__card">               
                <a href="./productos.php"><img src="./images/mujer3.avif" alt=""></a>
                <div class="productos__detalle">
                    <h3 class="productos__nombre">SUDADERA DE JACQUARD CON CAPUCHA, CREMALLERA Y DETALLE DE MONOGRAMA</h3>
                    <p class="productos__precio">180.00 €</p>
                    <a href="" class="productos__btn">Comprar</a>
                </div>
            </div>
            <!--producto4-->
            <div class="productos__card">               
                <a href="./productos.php"><img src="./images/mujer4.avif" alt=""></a>
                <div class="productos__detalle">
                    <h3 class="productos__nombre">SUDADERA JOGGER DE MUJER LACOSTE EN FELPA ECOLÓGICA CON CAPUCHA Y CREMALLERA</h3>
                    <p class="productos__precio">140.00 €</p>
                    <a href="" class="productos__btn">Comprar</a>
                </div>
            </div>

        </div>
</section>







<?php
include "./php/footer.php"
?>