var iconoInicio;
var iconoRegistro;
var iconoAyuda;
var iconoRecargar;
var iconoMenu;
var iconoNreserva;
var iconoCreserva;
var iconoNparte;
var iconoGparte;
var tdDescripcion;

function descripcionInicio(){
	tdDescripcion.innerHTML = "Devuelve al inicio de la aplicacion";
}
function descripcionRegistro(){
	tdDescripcion.innerHTML = "Registro para usuarios nuevos";
}
function descripcionAyuda(){
	tdDescripcion.innerHTML = "Despliega este menú de ayuda";
}
function descripcionRecargar(){
	tdDescripcion.innerHTML = "Recarga la pagina actual";
}
function descripcionMenu(){
	tdDescripcion.innerHTML = "Al pasar el ratón sobre él, despliega una serie de acciones disponibles.";
}
function descripcionNreserva(){
	tdDescripcion.innerHTML = "Crear una nueva reserva de aula";
}
function descripcionCreserva(){
	tdDescripcion.innerHTML = "Consultar las aulas reservadas";
}
function descripcionNparte(){
	tdDescripcion.innerHTML = "Crear un nuevo parte disciplinario";
}
function descripcionGparte(){
	tdDescripcion.innerHTML = "Gestionar partes creados.";
}

function asignarEventos(){
	if (document.readyState == 'complete') {
		tdDescripcion = document.getElementById("td_descripcion");
		iconoInicio = document.getElementById("icono_inicio");
		iconoRegistro = document.getElementById("icono_registro");
		iconoAyuda = document.getElementById("icono_ayuda");
		iconoRecargar = document.getElementById("icono_recargar");
		iconoMenu = document.getElementById("icono_menu");
		iconoNreserva = document.getElementById("icono_nreserva");
		iconoCreserva = document.getElementById("icono_creserva");
		iconoNparte = document.getElementById("icono_nparte");
		iconoGparte = document.getElementById("icono_gparte");

		iconoInicio.addEventListener("mouseover", descripcionInicio);
		iconoRegistro.addEventListener("mouseover", descripcionRegistro);
		iconoAyuda.addEventListener("mouseover", descripcionAyuda);
		iconoRecargar.addEventListener("mouseover", descripcionRecargar);
		iconoMenu.addEventListener("mouseover", descripcionMenu);
		iconoNreserva.addEventListener("mouseover", descripcionNreserva);
		iconoCreserva.addEventListener("mouseover", descripcionCreserva);
		iconoNparte.addEventListener("mouseover", descripcionNparte);
		iconoGparte.addEventListener("mouseover", descripcionGparte);
	}
}

document.addEventListener('readystatechange', asignarEventos, false);
