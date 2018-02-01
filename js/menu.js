// AJAX ----------------------------------------------------------------------------------
// Obtener la instancia del objeto XMLHttpRequest creando una variable
function instanciar(){
	if(window.XMLHttpRequest) {
		peticion_departamentos= new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		peticion_departamentos= new ActiveXObject("Microsoft.XMLHTTP");
	}
}

// Preparar la funcion de respuesta
function prepararPeticion(){
	peticion_departamentos.onreadystatechange = obtenerContenido;
}


// Realizar peticion HTTP
function realizarPeticion(){
	peticion_departamentos.open('GET', 'http://192.168.3.176/workspace/aulesco/js/archivos/menu.txt', true);
	peticion_departamentos.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	peticion_departamentos.send(null);
}


function obtenerContenido() {
	if(peticion_departamentos.readyState == 4) {
		if(peticion_departamentos.status == 200) {
			depart_select.innerHTML += peticion_departamentos.responseText;
		}
	}
}
	
window.onload = function (){
	instanciar();
	prepararPeticion();
	realizarPeticion();
}

// FIN AJAX ------------------------------------------------------------------------------------

function asignarEventos(){
	
	if (document.readyState == 'complete') {
		idRegSelect = document.getElementById("idreg_select");
		
		departamentoSelect.addEventListener("blur", validaDepartamento);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
