// obtener la instanacia a objetos SMLHttpRequiest
var global;

window.onload = function (){
	//1
	// Obtener la instancia del objeto XMLHttpRequest creando una variable
	if(window.XMLHttpRequest) {
		peticion_http = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
	}
 
	// Preparar la funcion de respuesta
	peticion_http.onreadystatechange = muestraContenido;
 
	// Realizar peticion HTTP
	peticion_http.open('GET', 'http://192.168.3.176/workspace/aplicacion/php/load_users.php', true);
	peticion_http.send(null);
	console.log ("global tras peticion" + global);
  
	function muestraContenido() {
		console.log ("State de la peticion " + peticion_http.readyState);
		console.log ("Status de la peticion " + peticion_http.status);
		if(peticion_http.readyState == 4) {
			if(peticion_http.status == 200) {
				global = peticion_http.responseText;  
				procesar_respuesta();		  
			}
		}
	}
  
	function procesar_respuesta(){
		console.log ("global dentro de funcion procesar_respuesta" + global);
		document.write ("global dentro de funcion procesar_respuesta" + global);
	}
}
