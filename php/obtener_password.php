<?php
	header('Content-Type: text/html;charset=ISO-8859-1');
	header("Access-Control-Allow-Origin: *");

	$GLOBALS['DB_IP'] = 'localhost';
	$GLOBALS['DB_USER'] = 'root';
	$GLOBALS['DB_PASS'] = 'root';
	$GLOBALS['DB_NAME'] = 'aulesco';
	$db = mysqli_connect($GLOBALS['DB_IP'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASS'], $GLOBALS['DB_NAME']);
	
	$dsSelect = $_POST['ds_select'];
	
	if (!$db) {
		echo "No pudo conectarse a la BD: " . mysqli_error();
		exit();
	}
	
	$switch=false;
	$consulta = "SELECT clave_p FROM profesores WHERE ds_p LIKE ". $dsSelect;
	$result = mysqli_query($db, $consulta);
	
	if (!$result) {
		echo ("Error en la consulta".$result);
	} else {
		while ($valor = mysqli_fetch_array($result)) {
			$ver_clave = $valor['clave_p'];
			$switch=true;
			echo "$ver_clave ";
		}
		
		if (!$switch) {
			echo "error".","."error";
		}
	}
	mysqli_close($db);
?>