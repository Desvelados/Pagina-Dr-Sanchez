<?php
// captura de variables
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$email=$_POST['email'];
$lugar=$_POST['lugar'];
$consulta=$_POST['consulta'];

date_default_timezone_set('America/Argentina/Buenos_Aires');
$dia=date('d-m-Y');
$tiempo=date('H:i');

// cuerpo del email
$mensaje="
<div style='border:solid black 2px; padding:2%;'>
	<strong>Nombre:</strong> $nombre <br/><br/>
	<strong>Apellido:</strong> $apellido<br/><br/>
	<strong>Fecha Consulta:</strong> $dia<br/><br/>
	<strong>Hora Consulta:</strong> $tiempo<br/><br/>
	<strong>Email:</strong> $email<br/><br/>
	<strong>Lugar de Trabajo:</strong> $lugar<br/><br />
	<strong>Consulta:</strong> <br/>
	<div style='margin:2%;'>''$consulta''</div>
</div>";

// envío del email
mail("desveladosd@gmail.com", "Consulta Web de $apellido, $nombre", $mensaje, "From: ". $email . "<$email>\nReply-To:$email\nContent-Type: text/html; charset=utf-8\n");

//con esto me lleva a alguna pagina
header("Location: localhost:8080\prueba");
?>
