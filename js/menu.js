var menu;
var iconoMenu;
var infoSesion;

// AJAX ----------------------------------------------------------------------------------
// Obtener la instancia del objeto XMLHttpRequest creando una variable
function instanciar(){
	if(window.XMLHttpRequest) {
		peticion_menu= new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		peticion_menu= new ActiveXObject("Microsoft.XMLHTTP");
	}
}

// Preparar la funcion de respuesta
function prepararPeticion(){
	peticion_menu.onreadystatechange = obtenerContenido;
}


// Realizar peticion HTTP
function realizarPeticion(){
	peticion_menu.open('GET', 'http://192.168.3.176/workspace/aulesco/js/archivos/menu.txt', true);
	peticion_menu.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	peticion_menu.send(null);
}


function obtenerContenido() {
	if(peticion_menu.readyState == 4) {
		if(peticion_menu.status == 200) {
			menu.innerHTML = peticion_menu.responseText;
		}
	}
}

function colocarMenu() {
	instanciar();
	prepararPeticion();
	realizarPeticion();
	infoSesion.style.display = "none";
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
