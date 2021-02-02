listarDiscos(arrayDiscos)
tableDiscos(arrayDiscos)

//estrellas(5)

function clickBtnAgregar() {

	var txtNombre = document.getElementById("txtNombre")
	var nombre = txtNombre.value
	var txtNombre1 = document.getElementById("txtNombre1")
	var nombre1 = txtNombre1.value
	var txtNombre2 = document.getElementById("txtNombre2")
	var nombre2= txtNombre2.value
	var txtNombre3 = document.getElementById("txtNombre3")
	var nombre3 = txtNombre3.value
	var txtNombre4= document.getElementById("txtNombre4")
	var nombre4 = txtNombre4.value
	var txtNombre5 = document.getElementById("txtNombre5")
	var nombre5 = txtNombre5.value
	var txtNombre6 = document.getElementById("txtNombre6")
	var nombre6 = txtNombre6.value
	var txtNombre7 = document.getElementById("txtNombre7")
	var nombre7 = txtNombre7.value
	

	if (nombre.length == 0) {
		alert("Ingresa el  nombre del Autor el Disco")
		
		}else if (nombre1.length == 0) {
			alert("Ingresa el nombre del album")
		}else if (nombre2.length == 0) {
			//nomAutor,nomDisco,imagen, proArtis,anio, descri,puntua,discografica
			alert("Ingresa la direccion de la imagen")
		}else if (nombre3.length == 0) {
			alert("Ingresa la procedencia del Artista")
		}else if (nombre4.length == 0) {
			alert("Ingresa La fecha")
		}else if (nombre5.length == 0) {
			alert("Ingresa la descripcion")
		}else if (nombre6.length == 0) {
			alert("Ingresa la puntuacion")
		}else if (nombre7.length == 0) {
			alert("Ingresa la discografica")						
	   
	} else {

		var objDiscos = crearDisco(nombre, nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7)
		arrayDiscos.push(objDiscos)
		//listarDiscos()
		listaDiscos()
		limpiarInputs()
	}
}

function clickBtnBuscar() {

	var txtBuscar = document.getElementById("txtBuscar")
	var arrayResultado = buscarDato(txtBuscar.value)

	listarDiscos(arrayResultado)
}

function limpiarInputs() {

	var txtNombre = document.getElementById("txtNombre")
	var txtNombre1 = document.getElementById("txtNombre1")
	var txtNombre2 = document.getElementById("txtNombre2")
	var txtNombre3 = document.getElementById("txtNombre3")
	var txtNombre4 = document.getElementById("txtNombre4")
	var txtNombre5 = document.getElementById("txtNombre5")
	var txtNombre6 = document.getElementById("txtNombre6")
	var txtNombre7 = document.getElementById("txtNombre7")

	txtNombre.value = ""
	txtNombre1.value = ""
	txtNombre2.value = ""
	txtNombre3.value = ""
	txtNombre4.value = ""
	txtNombre5.value = ""
	txtNombre6.value = ""
	txtNombre7.value = ""
}

function listarDiscos(array) {
	var lstDiscos = document.getElementById("lstDiscos")
	lstDiscos.innerHTML = crearListaDiscos(array)
}

function tableDiscos(array) {
	var lstDiscos = document.getElementById("tableDiscos")
	lstDiscos.innerHTML = crearTablaDiscos(array)
}

function clickBtnOrderPorFecha() {
	orderPorFecha()
	listarDiscos(arrayDiscos)
}

function clickBtnOrderPorNombre() {
    orderPorNombre()
	listarDiscos(arrayDiscos)
}

function clickBtnEliminar() {

	var nombreEliminar = document.getElementById("txtBuss").value
	eliminarDiscoPorNombre(nombreEliminar)
	listarDiscos(arrayDiscos)
}

