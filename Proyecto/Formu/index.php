<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="estilo.css">
        <title>Moomin</title>
    
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;500;700&family=Nunito:ital,wght@0,400;0,900;1,700&display=swap" rel="stylesheet">
    </head>
<body>
    <header>
        <div class="I1">
            <img id="logo" src="/Proyecto/img/MoominLogoAzul.png">
        </div>
        <nav>
            <ul class="select">
                <li> M&eacute;nu
                    <ul>
                        <li><a href="/Proyecto/index.html">Origen</a></li>
                        <li><a href="/Proyecto/Capitulos/capitulos.html">Capítulos</a></li>
                        <li><a href="/Proyecto/Personajes/personajes.html">Personajes</a></li>
                        <li><a href="/Proyecto/Escenarios/escenarios.html">Escenarios</a></li>
                    </ul>
                </li>
            </ul>
            
            <ul class="Menu">
                <li><a href="/Proyecto/index.html">Origen</a></li>
                <li><a href="/Proyecto/Capitulos/capitulos.html">Capítulos</a></li>
                <li><a href="/Proyecto/Personajes/personajes.html">Personajes</a></li>
                <li><a href="/Proyecto/Escenarios/escenarios.html">Escenarios</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="formulario">
        <h1>Formulario de Contacto</h1>
        <div class="contF">
            <form class="integrante" action="guardar.php" method="POST" id="contact_form" runat="server" enctype="multipart/form-data">
                <label for="nombre">Nombre:</label><br>
                <input type="text" id="nombre" name="nombre" maxlength="60"required><br>

                <label for="email">E-mail:</label><br>
                <input type="text" id="email" name="email" maxlength="60"required><br>

                <button class="submit" type="submit">Enviar Registro</button>
            </form>  
        </div>
        
    </div>
    <footer>
        <div class="social">
            <a href="https://www.facebook.com/SsleepyDOLL" target="_blank"><img src="/Proyecto/img/Facebook.png"></a>
        </div>
        <div class="social">
            <a href="https://www.instagram.com/sleepy_doodles999/" target="_blank"><img src="/Proyecto/img/Instagram1.png"></a>
        </div>
        <div class="social">
            <a href="mailto:mapeinado3513@gmail.com" target="_blank"><img src="/Proyecto/img/Gmail.png"></a>
        </div>
        <div class="social">
            <a href="/Proyecto/Identificador/Identificador.html"><img src="/Proyecto/img/Identificador-01.png"></a>
        </div>
        <p class="Nombre">Martha Peinado.</p>
    </footer>
</body>
</html>