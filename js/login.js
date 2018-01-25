var MAX_RANDOM = 6;
var MIN_RANDOM = 1;
var randomPositions = []; //tendra 3 numeros

var selectUsuario;
var arrayInputsPass = [];
var global;

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
	peticion_http_txt.open('POST', 'http://192.168.3.176/workspace/aplicacion/php/load_users.php', true);
	peticion_http_txt.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	peticion_http_txt.send(null);
}


function obtenerContenido() {
	if(peticion_http_txt.readyState == 4) {
		if(peticion_http_txt.status == 200) {
			selectUsuario.innerHTML += peticion_http_txt.responseText;	  
		}
	}
}
	
window.onload = function (){
	instanciar();
	prepararPeticion();
	realizarPeticion();
}
// FIN AJAX


function generaAleatorio(){
	aleatorio = Math.floor((Math.random() * MAX_RANDOM) + MIN_RANDOM);
	return aleatorio;
}

function rellenaArrayPositions(){
	for(var i = 0; i < 3; i++){
		randomPositions[i] = parseInt(Math.random()*6);
		for(var j = 0; j < i; j++){
			if(randomPositions[i] == randomPositions[j]){
				i--;
			}
		}
	}
}

function casillasBloqueadas(){
	for(i = 0; i < 3; i++){
		arrayInputsPass[randomPositions[i]].style.backgroundImage = "url(./img/lock.png)";
	}
}

function asignarEventos(){
	
	if (document.readyState == 'complete') {
		rellenaArrayPositions();
		selectUsuario = document.getElementById("select_usuario");
		arrayInputsPass = [
			document.getElementById("pwdBox1"),
			document.getElementById("pwdBox2"),
			document.getElementById("pwdBox3"),
			document.getElementById("pwdBox4"),
			document.getElementById("pwdBox5"),
			document.getElementById("pwdBox6")
		];
		
		selectUsuario.addEventListener("change", casillasBloqueadas);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
