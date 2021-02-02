
var arrayDiscos = [];
arrayDiscos.push(crearDisco("Forrest Frank", "Where The Light Is   ", "./imagenes/imagens1.jpg", "English", "2019", "Projects LLC", 4.8, "Surfaces Music"))
arrayDiscos.push(crearDisco("Bob Crewe", "Ily", "./imagenes/imagens2.jpg", "English", "2018", "Umg Recordings", "4.4", "AstralWerks"))
arrayDiscos.push(crearDisco("Ethan Healy", "Subluxe", "./imagenes/imagen3.jpg", "English", "2019", "Rca Records", " 4.3", "Baintrust"))
arrayDiscos.push(crearDisco("Grant Yarber", "Tucson", "./imagenes/imagen4.jpg", "English", "2017", "Rca Records", "4.2", "Sony Music"))
arrayDiscos.push(crearDisco("Charlie Puth", "Summer Feelings", "./imagenes/imagen5.jpg", "English", "2016", "Recording Corporation", "4.2 ", "Atlantic Records"))
arrayDiscos.push(crearDisco("Jacob Kasher", "Voicenotes", "./imagenes/imagen6.jpg", "English", "2018", "Arstist Pat", "4.1", "Artist"))
arrayDiscos.push(crearDisco("Mitchell Alan", "Camp", "./imagenes/imagen7.jpg", "English", "2016", "Walt", "4.0", "Bmg Publishing"))
arrayDiscos.push(crearDisco("Zack Skelton", "Deluxe", "./imagenes/imagen8.jpg", "English", "2019", "Music Group", "4.2", "Island Records"))
arrayDiscos.push(crearDisco("Zed", "Stay", "./imagenes/imagen9.jpg", "English", "2017", "UMGRI", "4.1", "Interscope"))
arrayDiscos.push(crearDisco("Fred Gibson", "LP1", "./imagenes/imagen10.jpg", "English", "2019", "MAC", "4.2", "Capitol"))


function crearDisco(nom, nomDisco, imagen, proArtis, anio, descri, puntua, discografica) {

	var objDisco = {
		nom: nom,
		nomDisco: nomDisco,
		imagen: imagen,
		proArtis: proArtis,
		anio: anio,
		descri: descri,
		puntua: puntua,
		discografica: discografica,

	}
	return objDisco
}


function buscarDato(dato) {

	var arrayResultado = arrayDiscos.filter(function (a) {

		var buscaNombre = a.nom.toLowerCase().search(dato.toLowerCase())
		var buscarDisco=a.nomDisco.toLowerCase().search(dato.toLowerCase())

		return buscaNombre >= 0 || buscarDisco>=0
	})

	return arrayResultado
}

function orderPorfecha() {


	arrayAlumnos.sort(function (a, b) {

		if (a.anio < b.anio) {
			return -1
		}

		if (a.anio > b.anio) {
			return 1
		}

		return 0
	})
}


function orderPorNombre() {

	arrayDiscos.sort(function (a, b) {

		if (a.nom < b.nom) {
			return -1
		}

		if (a.nom > b.nom) {
			return 1
		}

		return 0
	})
}

function eliminarDiscoPorNombre(nombre) {

	var resultado = arrayDiscos.filter(function (a) {
		return a.nom.toLowerCase().search(nombre.toLowerCase()) < 0
	})

	arrayAlumnos = resultado
}

function crearListaDiscos(array) {

	var lista = "<ul>"

	for (var i = 0; i < array.length; i++) {

		var objDisco = array[i];
		var nombre = objDisco.nom;
		var noms = objDisco.nomDisco;
		var imag = objDisco.imagen;


		lista += "<li>" + nombre + "</li>"
		lista += "<li>" + noms + "</li>"
		lista += "<td><img width='200px' src=" + imag + "></td>";
	}

	lista += "</ul>"

	return lista
}

function listaDiscos()
{   orderPorNombre()
	var lista = "<ul>"

	for (var i = 0; i < arrayDiscos.length; i++) {

		var objDisco = arrayDiscos[i];
		var nombre = objDisco.nom;
		var noms = objDisco.nomDisco;
		var imag = objDisco.imagen;


		lista += "<li>" + nombre + "</li>"
		lista += "<li>" + noms + "</li>"
		lista += "<td><img width='200px' src=" + imag + "></td>";
	}

	lista += "</ul>"
	document.body.innerHTML = lista
}
function crearTablaDiscos(array) {

	//  ordenartabla();
	var tabla = "<table border = '1'>"

	tabla += '<tr>'
	var nombre = "Nombre Autor"
	var nom = "Nombre Disco"
	var imagen = "Imagen"
	var proArtis = "Procedencia Artista"
	var anio = "Anio"
	var descri = "Descripcion"
	var puntua = "Puntuacion"
	var discogra = "Discografica"
	//var cabecera=nombre+tipo+descri+anio;
	tabla += '<th>' + nombre + '</th>'
	tabla += '<th>' + nom + '</th>'
	tabla += '<th>' + imagen + '</th>'
	tabla += '<th>' + proArtis + '</th>'
	tabla += '<th>' + anio + '</th>'
	tabla += '<th>' + descri + '</th>'
	tabla += '<th>' + puntua + '</th>'
	tabla += '<th>' + discogra + '</th>'

	tabla += '</tr>'
	for (var i = 0; i < array.length; i++) {

		//nomAutor,nomDisco,imagen, proArtis,anio, descri,puntua,discografica
		tabla += '<tr>'
		var objDisco = array[i];
		var nombre = objDisco.nom;
		var nom = objDisco.nomDisco;
		var imag = objDisco.imagen;
		var proArtis = objDisco.proArtis;
		var anio = objDisco.anio;
		var descri = objDisco.descri;
		var puntua = objDisco.puntua;
		var discogra = objDisco.discografica;

		var nombres = nombre
		var noms = nom;
		var imags = imag;
		var proArtiss = proArtis;
		var anios = anio;
		var descris = descri;
		var puntuas = puntua;
		var discogras = discogra;

		tabla += '<td>' + nombres + '</td>'
		tabla += '<td>' + noms + '</td>'
		// tabla += '<td>' + imags+ '</td>'
		tabla += "<td><img width='200px' src=" + imag + "></td>";
		tabla += '<td>' + proArtiss + '</td>'
		tabla += '<td>' + anios + '</td>'
		tabla += '<td>' + descris + '</td>'
		tabla += '<td>' + puntuas + '</td>'
		tabla += '<td>' + discogras + '</td>'


		tabla += '</tr>'
	}
	tabla += "</table>"
	return tabla;
	//tabla += "</table>"

	//document.body.innerHTML = tabla
}
function tablaDiscos()
{  orderPorNombre();
	var tabla = "<table border = '1'>"

	tabla += '<tr>'
	var nombre = "Nombre Autor"
	var nom = "Nombre Disco"
	var imagen = "Imagen"
	var proArtis = "Procedencia Artista"
	var anio = "Anio"
	var descri = "Descripcion"
	var puntua = "Puntuacion"
	var discogra = "Discografica"
	//var cabecera=nombre+tipo+descri+anio;
	tabla += '<th>' + nombre + '</th>'
	tabla += '<th>' + nom + '</th>'
	tabla += '<th>' + imagen + '</th>'
	tabla += '<th>' + proArtis + '</th>'
	tabla += '<th>' + anio + '</th>'
	tabla += '<th>' + descri + '</th>'
	tabla += '<th>' + puntua + '</th>'
	tabla += '<th>' + discogra + '</th>'

	tabla += '</tr>'
	for (var i = 0; i < arrayDiscos.length; i++) {

		//nomAutor,nomDisco,imagen, proArtis,anio, descri,puntua,discografica
		tabla += '<tr>'
		var objDisco = arrayDiscos[i];
		var nombre = objDisco.nom;
		var nom = objDisco.nomDisco;
		var imag = objDisco.imagen;
		var proArtis = objDisco.proArtis;
		var anio = objDisco.anio;
		var descri = objDisco.descri;
		var puntua = objDisco.puntua;
		var discogra = objDisco.discografica;

		var nombres = nombre
		var noms = nom;
		var imags = imag;
		var proArtiss = proArtis;
		var anios = anio;
		var descris = descri;
		var puntuas = puntua;
		var discogras = discogra;

		tabla += '<td>' + nombres + '</td>'
		tabla += '<td>' + noms + '</td>'
		// tabla += '<td>' + imags+ '</td>'
		tabla += "<td><img width='200px' src=" + imag + "></td>";
		tabla += '<td>' + proArtiss + '</td>'
		tabla += '<td>' + anios + '</td>'
		tabla += '<td>' + descris + '</td>'
		tabla += '<td>' + puntuas + '</td>'
		tabla += '<td>' + discogras + '</td>'


		tabla += '</tr>'
	}
	tabla += "</table>"
	
	//tabla += "</table>"

	document.body.innerHTML = tabla

}







