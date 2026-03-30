

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const btnRegistrar = document.getElementById("submit");
const btnAction = document.getElementById("btnAction");

const titulo = document.querySelector(".titulo");
const descripcion = document.querySelector(".descripcion");
const mensaje = document.querySelector("#interaccion p");
const contacto = document.getElementById("contacto");

const menu = document.querySelector(".menu");
const logo = document.getElementById("logo");
const links = document.querySelectorAll(".menu a");

let colorCambiado = false;

btnAction.addEventListener("click", function () {
    if (colorCambiado === false) {
        menu.style.backgroundColor = "#222";
        logo.style.backgroundColor = "#222";

        links.forEach(function(link) {
            link.style.color = "white";
        });

        colorCambiado = true;
    } else {
        menu.style.backgroundColor = "";
        logo.style.backgroundColor = "";

        links.forEach(function(link) {
            link.style.color = "";
        });

        colorCambiado = false;
    }
});


btnAction.addEventListener("click", function () {
    titulo.textContent = "Gracias por visitar LABS IDEAS";
    descripcion.textContent = "Estamos listos para ayudarte con soluciones innovadoras en tecnología.";
});


btnRegistrar.addEventListener("click", function () {
    const nombreTexto = nombre.value.trim();
    const correoTexto = correo.value.trim();

    if (nombreTexto === "" || correoTexto === "") {
        mensaje.textContent = "Por favor, complete todos los campos.";
    } else {
        mensaje.textContent = `Hola ${nombreTexto}, hemos recibido tu correo ${correoTexto}.`;
    }
});


mensaje.addEventListener("dblclick", function () {
    mensaje.textContent = "";
});


nombre.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnRegistrar.click();
    }
});


correo.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnRegistrar.click();
    }
});


nombre.addEventListener("keyup", function (event) {
    if (event.key === "Enter") return;

    const texto = nombre.value.trim();

    if (texto.length > 0) {
        mensaje.textContent = `Escribiendo nombre: ${texto}`;
    } else {
        mensaje.textContent = "";
    }
});


correo.addEventListener("keyup", function (event) {
    if (event.key === "Enter") return;

    const texto = correo.value.trim();

    if (texto.length > 0) {
        mensaje.textContent = `Escribiendo correo: ${texto}`;
    } else {
        mensaje.textContent = "";
    }
});


contacto.addEventListener("mouseover", function () {
    contacto.style.backgroundColor = "#d6d6d6";
});

contacto.addEventListener("mouseout", function () {
    contacto.style.backgroundColor = "";
});