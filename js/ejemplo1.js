function crearNodo(nodo) {
    var nodo = document.createElement(nodo)
    return nodo
}

function crearNodoConTexto(nodo, texto) {
    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}

function crearImagen(rutaImagen, textoAlt, ancho, alto) {
    var nodoImagen = crearNodo("img")
    nodoImagen.src = rutaImagen
    nodoImagen.alt = textoAlt
    nodoImagen.style.width = ancho
    nodoImagen.style.height = alto
    return nodoImagen
}

function crearVideo(rutaVideo) {
    var nodoVideo = crearNodo("Video")
    var source = crearNodo("source")
    source.src = rutaVideo
    nodoVideo.setAttribute("controls", "controls")
    nodoVideo.appendChild(source)
    return nodoVideo
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)
}

function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo)
}

function enlace (texto, rutaEnlace, target) {
    var enlace = crearNodo("a")
    var nodoTexto = document.createTextNode(texto)
    enlace.href = rutaEnlace
    enlace.target = target
    enlace.appendChild(nodoTexto)
    return enlace
}

function crearAbbr(abreviacion, txt) {
    var abbr = crearNodo("abbr")
    abbr.textContent = txt
    abbr. title = abreviacion
    return abbr
}