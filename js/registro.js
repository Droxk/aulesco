// Identificador
var idRegSelect;
var idDiv;
// Nombre completo
var nombreDiv;
var nombreInput;
// ICM
var icmDiv;
var icmInput;
// Departamento
var departamentoDiv;
var departamentoSelect;
// Email
var emailDiv;
var emailInput;
// Clave
var claveDiv;
var claveInput;
// Clave repetida
var claverepDiv;
var claverepInput;
// Boton submit registro
var submitRegistro;

// Generacion de options para los usuarios de registro / modificacion
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

// VALIDACIONES ------------------------------------------

// Comprueba si el campo esta vacio para añadirle la clase " has-error"
// ATENCION: Se debe pasar el DIV donde esta el input ya que lo que se edita es la clase
function compruebaVacio(campo) {
    if (campo.value == "") {
		console.log("entra");
        campo.className += " has-error";
        return false;
    }
}

// Validacion del select de usuario de Registro / Modificacion
function validaIdSelect(){
	if(idRegSelect.selectedIndex < 1){
		idDiv.className = "col-md-6 form-group has-error";
		return false;
	} else {
		idDiv.className = "col-md-6 form-group";
		return true;
	}
}

// Validacion de nombre completo
function validaNombre(){
	var re = /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/;
	if(!re.test(nombreInput.value)){
		nombreDiv.className = "col-md-6 form-group has-error";
		return false;
	} else {
		nombreDiv.className = "col-md-6 form-group has-success";
		return true;
	}
}

// Validacion de email
function validaEmail() {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!re.test(emailInput.value)){
		emailDiv.className = "col-md-6 form-group has-error";
		return false;
	} else {
		emailDiv.className = "col-md-6 form-group has-success";
		return true;
	}
}

// Validacion de ICM
function validaIcm(){
	var re = /[a-z|A-Z][a-z|A-Z][a-z|A-Z][0-9]?[0-9]?/;
	if(!re.test(icmInput.value)){
		icmDiv.className = "col-md-6 form-group has-error";
		return false;
	} else {
		icmDiv.className = "col-md-6 form-group has-success";
		return true;
	}
}

// Validacion de Departamento
function validaDepartamento(){
	if(departamentoSelect.selectedIndex < 1){
		departamentoDiv.className = "col-md-6 form-group has-error";
		return false;
	} else {
		departamentoDiv.className = "col-md-6 form-group";
		return true;
	}
}

// Validacion de contraseña (no empieza ni acaba por 0, son todo numeros, tiene una longitud de 6)
function validaPass(){
	
}

function validaPassRepetida(){
	
}

// FIN VALIDACIONES --------------------------------------

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
	peticion_departamentos.open('GET', 'http://192.168.3.176/workspace/aulesco/js/archivos/departamentos.txt', true);
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
		idDiv = document.getElementById("identificador_div");
		nombreDiv = document.getElementById("nombre_div");
		nombreInput = document.getElementById("nombre_input");
		icmDiv = document.getElementById("icm_div");
		icmInput = document.getElementById("icm_input");
		departamentoDiv = document.getElementById("departamento_div");
		departamentoSelect = document.getElementById("depart_select");
		emailDiv = document.getElementById("email_div");
		emailInput = document.getElementById("email_input");
		claveDiv = document.getElementById("clave_div");
		claveInput = document.getElementById("clave_input");
		claverepDiv = document.getElementById("claverep_div");
		claverepInput = document.getElementById("claverep_input");
		submitRegistro = document.getElementById("submit_input");
		
		generarOptionsRegistro();
		
		idRegSelect.addEventListener("change", validaIdSelect);
		nombreInput.addEventListener("blur", validaNombre);
		icmInput.addEventListener("blur", validaIcm);
		emailInput.addEventListener("blur", validaEmail);
		departamentoSelect.addEventListener("blur", validaDepartamento);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
