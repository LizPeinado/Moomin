<?php

$conexion = new mysqli("localhost", "root", "","miembros");
    if($conexion){
        echo "la gestion fue exitosa !!";
        /*header("Location: index.php")*/
    }else{
        echo "Fallo la gestion";
    }
?>