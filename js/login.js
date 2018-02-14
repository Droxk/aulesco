var MAX_RANDOM = 6;
var MIN_RANDOM = 1;
var randomPositions = []; //tendra 3 numeros

var selectUsuario;
var arrayInputsPass = [];
var arrayBotonesTeclado = [];
var arrayCifrasTeclado = [0,1,2,3,4,5,6,7,8,9];

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
	peticion_http_txt.open('POST', 'http://192.168.3.176/workspace/aulesco/php/load_users.php', true);
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
	//resetear casillas en cada cambio
	for(i = 0; i < 3; i++){
		arrayInputsPass[randomPositions[i]].style.backgroundImage = "";
	}
	rellenaArrayPositions();
	
	for(i = 0; i < 3; i++){
		arrayInputsPass[randomPositions[i]].style.backgroundImage = "url(./img/lock.png)";
	}
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function asignarNumerosTeclado(array){
	array.sort(function(a, b){return 0.5 - Math.random()}); // Ordena el array en orden aleatorio
	
	for(i = 0; i < arrayBotonesTeclado.length-2; i++){
		arrayBotonesTeclado[i].innerHTML = array[i];
		arrayBotonesTeclado[i].value = array[i];
	}
}

function escribePassword(){
	console.log("funciona");
}


function asignarEventos(){
	
	if (document.readyState == 'complete') {
		selectUsuario = document.getElementById("select_usuario");
		arrayInputsPass = [
			document.getElementById("pwdBox1"),
			document.getElementById("pwdBox2"),
			document.getElementById("pwdBox3"),
			document.getElementById("pwdBox4"),
			document.getElementById("pwdBox5"),
			document.getElementById("pwdBox6")
		];
		arrayBotonesTeclado = [
			document.getElementById("c0"),
			document.getElementById("c1"),
			document.getElementById("c2"),
			document.getElementById("c3"),
			document.getElementById("c4"),
			document.getElementById("c5"),
			document.getElementById("c6"),
			document.getElementById("c7"),
			document.getElementById("c8"),
			document.getElementById("c9"),
			document.getElementById("bt"),
			document.getElementById("bu")
		];
		
		rellenaArrayPositions();
		asignarNumerosTeclado(arrayCifrasTeclado);
		selectUsuario.addEventListener("change", casillasBloqueadas);
		// arrayBotonesTeclado[0].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[1].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[2].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[3].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[4].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[5].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[6].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[7].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[8].addEventListener("click", escribePassword);
		// arrayBotonesTeclado[9].addEventListener("click", escribePassword);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
