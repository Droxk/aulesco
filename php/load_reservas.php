<?php
	header('Content-Type: text/html;charset=ISO-8859-1');
	header("Access-Control-Allow-Origin: *");

	$GLOBALS['DB_IP'] = 'localhost';
	$GLOBALS['DB_USER'] = 'root';
	$GLOBALS['DB_PASS'] = 'root';
	$GLOBALS['DB_NAME'] = 'aulesco';
	$db = mysqli_connect($GLOBALS['DB_IP'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASS'], $GLOBALS['DB_NAME']);
	
	if (!$db) {
		echo "No pudo conectarse a la BD: " . mysqli_error();
		exit();
	}
	
	$switch=false;
	$consulta = "SELECT * FROM reservas INNER JOIN profesores ON reservas.profesor_r = profesores.ds_p;";
	$result = mysqli_query($db, $consulta);
	
	if (!$result) {
		echo ("Error en la consulta".$result);
	} else {
		while ($valor = mysqli_fetch_array($result)) {
			$numero_r = $valor['numero_r'];
			$hora_r = $valor['hora_r'];
			$nombre_p = $valor['nombre_p'];
			$fecha_r = $valor['fecha_r'];
			$aula_r = $valor['aula_r'];
			$switch = true;
			
			echo "
			<tr>
				<td>$numero_r</td>
				<td>$aula_r</td>
				<td>$nombre_p</td>
				<td>$fecha_r</td>
				<td>$hora_r</td>
			</tr>
			";
		}
		
		if (!$switch) {
			echo "error".","."error";
		}
	}
	mysqli_close($db);
?>