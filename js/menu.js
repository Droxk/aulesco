var menu;
var iconoMenu;
var cargarMenu;
var infoSesion;

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
			cargarMenu += peticion_departamentos.responseText;
		}
	}
}

function colocarMenu() {
	infoSesion.style.display = "none";
	menu.innerHTML = cargarMenu;
}
	
window.onload = function (){
	instanciar();
	prepararPeticion();
	realizarPeticion();
}

// FIN AJAX ------------------------------------------------------------------------------------

function asignarEventos(){
	
	if (document.readyState == 'complete') {
		infoSesion = document.getElementById("info_sesion");
		menu = document.getElementById("menu");
		iconoMenu = document.getElementById("icono_menu");
		
		iconoMenu.addEventListener("mouseover", colocarMenu);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
