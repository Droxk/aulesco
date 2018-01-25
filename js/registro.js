var idRegSelect;
var nombreDiv;
var icmDiv;
var departamentoDiv;
var departamentoSelect;
var emailDiv;
var claveDiv;
var claverepDiv;

function generarOptionsRegistro(){
	var optionCreado = document.createElement("option");
	idRegSelect.options[i] = (new Option("ds00"+i, "ds00"+i));
	for (var i = 1; i < 100; i++){
		if (i < 10){
			idRegSelect.options[i] = (new Option("ds00"+i, "ds00"+i));
		} else if (i >= 10 && i < 100){
			idRegSelect.options[i] = (new Option("ds0"+i, "ds0"+i));
		}
	}
}

function testError(){
	claveDiv.className += " has-error";
}

// AJAX ----------------------------------------------------------------------------------
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
	peticion_http.open('GET', 'http://192.168.3.176/workspace/aplicacion/js/archivos/departamentos.txt', true);
	peticion_http_txt.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	peticion_http_txt.send(null);
}


function obtenerContenido() {
	if(peticion_http_txt.readyState == 4) {
		if(peticion_http_txt.status == 200) {
			idRegSelect.innerHTML += peticion_http_txt.responseText;	  
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
		nombreDiv = document.getElementById("clave_div");
		icmDiv = document.getElementById("clave_div");
		departamentoDiv = document.getElementById("clave_div");
		departamentoSelect = document.getElementById("depart_select");
		emailDiv = document.getElementById("clave_div");
		claveDiv = document.getElementById("clave_div");
		claverepDiv = document.getElementById("clave_div");
		claveDiv = document.getElementById("clave_div");
		
		generarOptionsRegistro();
		testError();
		
		//selectUsuario.addEventListener("change", casillasBloqueadas);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
