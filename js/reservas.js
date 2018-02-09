var tablaReservas;

// AJAX
// Obtener la instancia del objeto XMLHttpRequest creando una variable
function instanciar(){
	if(window.XMLHttpRequest) {
		peticion_http_txt= new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		peticion_http_txt= new ActiveXObject("Microsoft.XMLHTTP");
	}
}

// Preparar la funcion de respuesta
function prepararPeticion(){
	peticion_http_txt.onreadystatechange = obtenerContenido;
}


// Realizar peticion HTTP
function realizarPeticion(){
	peticion_http_txt.open('POST', 'http://192.168.3.176/workspace/aulesco/php/load_reservas.php', true);
	peticion_http_txt.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	peticion_http_txt.send(null);
}


function obtenerContenido() {
	if(peticion_http_txt.readyState == 4) {
		if(peticion_http_txt.status == 200) {
			tablaReservas.innerHTML = peticion_http_txt.responseText;
		}
	}
}
	
window.onload = function (){
	instanciar();
	prepararPeticion();
	realizarPeticion();
}
// FIN AJAX

function asignarEventos(){
	
	if (document.readyState == 'complete') {
		tablaReservas = document.getElementById("tabla_reservas");
		
		//iconoMenu.addEventListener("mouseover", colocarMenu);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
