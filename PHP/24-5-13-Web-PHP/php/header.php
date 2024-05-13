
<?php
include "variables.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pagina; ?>- <?php echo $nombre_web; ?> </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/galeria.css">
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/galeria.js" defer></script>
</head>
<body>
    <!--header-->
    <header class="header">
        <a class="header__logo" href="./inicio.php"><img src="./images/lacoste.jpeg" alt=""></a>
        <nav class="nav">
            <ul class="nav__navbar">
                <li class="nav__list"><a href="./inicio.php" class="nav__link" >Inicio</a></li>
                <li class="nav__list"><a href="./nosotros.php" class="nav__link">Nosotros</a></li>
                <li class="nav__list"><a href="./tienda.php" class="nav__link">Tienda</a></li>
                <li class="nav__list"><a href="./contacto.php" class="nav__link">Contacto</a></li>
            </ul>
        </nav>
    </header>
