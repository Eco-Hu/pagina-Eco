window.onload = function () {
    alert("Bienvenido a la página comunitaria. ¡Infórmate y participa!");
    mostrarSeccion('Huellitas', document.querySelector('.mainNav a')); 
};

function mostrarSeccion(id, elemento) {
    // Oculta todas las secciones
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));

    // Muestra la sección seleccionada
    document.getElementById(id).classList.add('active');

    // Quita .active de todos los enlaces del menú principal
    document.querySelectorAll('.mainNav a').forEach(link => link.classList.remove('active'));

    // Quita .active de todos los enlaces del submenú
    document.querySelectorAll('.subnav a').forEach(link => link.classList.remove('active'));

    // Marca como activo el enlace actual del menú principal
    elemento.classList.add('active');
}

function mostrarSubtip(id, elemento) {
    // Oculta todos los subtip
    document.querySelectorAll('.subtip').forEach(st => st.classList.remove('active'));

    // Muestra el subtip seleccionado
    document.getElementById(id).classList.add('active');

    // Quita .active de todos los enlaces del submenú
    document.querySelectorAll('.subnav a').forEach(link => link.classList.remove('active'));

    // Marca como activo el enlace actual del submenú
    elemento.classList.add('active');
}


function agregarComentario() {
    let texto = document.getElementById("entrada").value;

    if (texto.trim() !== "") {
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = texto;
        document.getElementById("lista-comentarios").appendChild(nuevoComentario);
        document.getElementById("entrada").value = ""; // Limpia la caja
    } else {
        alert("Por favor, escribe algo antes de enviar.");
    }
}
