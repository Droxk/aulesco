var MAX_RANDOM = 6;
var MIN_RANDOM = 1;
const BOTON_BT = 11;
const BOTON_BU = 10;

var randomPositions = []; //tendra 3 numeros

var selectUsuario;
var arrayInputsPass = [];
var arrayBotonesTeclado = [];
var arrayCifrasTeclado = [0,1,2,3,4,5,6,7,8,9];
var arrayClaveIntroducida = ["","","","","",""];
var btnInicioSesion;
var teclado;
var arrayTecladoY = [0,-1, 1];
var arrayTecladoX = [0,-1, 1];
var divPwd;

// AJAX

function cargarSelectUsuarios(){
	// Obtener la instancia del objeto XMLHttpRequest creando una variable
	function instanciar(){
		if(window.XMLHttpRequest) {
			pedir_usuarios= new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			pedir_usuarios= new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	// Preparar la funcion de respuesta
	function prepararPeticion(){
		pedir_usuarios.onreadystatechange = obtenerContenido;
	}


	// Realizar peticion HTTP
	function realizarPeticion(){
		pedir_usuarios.open('POST', 'http://192.168.3.176/workspace/control_marzo/ejercicio2/load_users.php', true);
		pedir_usuarios.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		pedir_usuarios.send(null);
	}


	function obtenerContenido() {
		if(pedir_usuarios.readyState == 4) {
			if(pedir_usuarios.status == 200) {
				selectUsuario.innerHTML += pedir_usuarios.responseText;	  
			}
		}
	}
	
	instanciar();
	prepararPeticion();
	realizarPeticion();
}

function obtenerPasswordUsuario(){
	// Obtener la instancia del objeto XMLHttpRequest creando una variable
	function instanciar(){
		if(window.XMLHttpRequest) {
			pedir_password= new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			pedir_password= new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	// Preparar la funcion de respuesta
	function prepararPeticion(){
		pedir_password.onreadystatechange = obtenerContenido;
	}


	// Realizar peticion HTTP
	function realizarPeticion(){
		pedir_password.open('POST', 'http://192.168.3.176/workspace/aulesco/php/obtener_password.php', true);
		pedir_password.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		pedir_password.send("ds_select = " + selectUsuario.value);
	}


	function obtenerContenido() {
		if(pedir_password.readyState == 4) {
			if(pedir_password.status == 200) {
				selectUsuario.innerHTML += pedir_password.responseText;
				console.log(pedir_password.responseText);
			}
		}
	}
	
	instanciar();
	prepararPeticion();
	realizarPeticion();
	console.log(selectUsuario.value);
}

// Cuando este lista la ventana (con el documento y todo lo demas)
window.onload = function (){
	cargarSelectUsuarios();
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

function moverTeclado(){
	var rdm = parseInt(Math.random()*4);
	
	teclado.className = "mover_teclado" + rdm;
}

function casillasBloqueadas(){
	//resetear casillas en cada cambio
	for(i = 0; i < arrayClaveIntroducida.length; i++){
		arrayInputsPass[i].value = "";
		arrayClaveIntroducida[i] = "";
	}
	
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

// ocultar div clave en caso de que el usuario seleccionado no este registrado
// divPwd.style.display = "none";

function escribePassword(e){
	console.log("Posiciones bloqueadas: " + randomPositions[0] + " " + randomPositions[1] + " " + randomPositions[2]);

	for(i = 0; i < arrayClaveIntroducida.length; i++){
		if(selectUsuario.value != "none"){
			if(arrayClaveIntroducida[i] == ""){
				if(arrayInputsPass[i].style.backgroundImage == ""){
					arrayInputsPass[i].value = e.target.value;
					arrayClaveIntroducida[i] = e.target.value;
					break;
				} else {
					arrayClaveIntroducida[i] = "*";
				}
			}
		}
	}
	console.log(arrayClaveIntroducida[0] + arrayClaveIntroducida[1] + arrayClaveIntroducida[2] + arrayClaveIntroducida[3] + arrayClaveIntroducida[4] + arrayClaveIntroducida[5]);
}

function borrarUltimo(){
	for(i = arrayClaveIntroducida.length-1; i >= 0; i--){
		if(arrayClaveIntroducida[i] != "*" && arrayClaveIntroducida[i] != ""){
			arrayInputsPass[i].value = "";
			arrayClaveIntroducida[i] = "";
			break;
		}
		
	}
}

function borrarTodo(){
	for(i = 0; i < arrayClaveIntroducida.length; i++){
		arrayInputsPass[i].value = "";
		arrayClaveIntroducida[i] = "";
	}
}	

function asignarEventos(){
	if (document.readyState == 'complete') {
		selectUsuario = document.getElementById("select_usuario");
		divPwd = document.getElementById("clave_div");
		btnInicioSesion = document.getElementById("iniciar_btn");
		teclado = document.getElementById("teclado");
		arrayInputsPass = [
			document.getElementById("pwdBox1"),
			document.getElementById("pwdBox2"),
			document.getElementById("pwdBox3"),
			document.getElementById("pwdBox4"),
			document.getElementById("pwdBox5"),
			document.getElementById("pwdBox6")
		];
		arrayBotonesTeclado = [
			document.getElementById("c0"),	// cifra 0
			document.getElementById("c1"),	// cifra 1
			document.getElementById("c2"),	// ...
			document.getElementById("c3"),
			document.getElementById("c4"),
			document.getElementById("c5"),
			document.getElementById("c6"),
			document.getElementById("c7"),
			document.getElementById("c8"),
			document.getElementById("c9"),
			document.getElementById("bu"),	// borrar ultimo
			document.getElementById("bt")	// borrar todo
		];
		
		rellenaArrayPositions();
		asignarNumerosTeclado(arrayCifrasTeclado);
		selectUsuario.addEventListener("change", casillasBloqueadas);
		// Eventos botones teclado
		for(i = 0; i < arrayBotonesTeclado.length-2; i++){
			arrayBotonesTeclado[i].addEventListener("click", escribePassword);
			arrayBotonesTeclado[i].addEventListener("click", moverTeclado);
		}
		arrayBotonesTeclado[BOTON_BU].addEventListener("click", borrarUltimo);
		arrayBotonesTeclado[BOTON_BT].addEventListener("click", borrarTodo);
		btnInicioSesion.addEventListener("click", obtenerPasswordUsuario);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
