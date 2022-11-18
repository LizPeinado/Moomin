<?php
    include("abre.php");

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

$consulta = "INSERT INTO integrante(nombre, email) VALUES('$nombre', '$email')";

    if ($conexion->query($consulta)=== TRUE){
        header("Location: index.php");
    }else{
        echo "Error: " . $consulta . "<br>" .$conexion->error;
    }

    $conexion->close();
?>