let entradas = [];
let indiceEntradas = -1;
if (JSON.parse(localStorage.getItem("Entradas")) != null) {
    localStorage.clear();
}

// Reseteo el formulario si el usuario hace click en Cancelar
let botonCancelar = document.getElementById("botonCancelar");
botonCancelar.addEventListener("click", resetearFormulario);

// Valido formulario al clickear Confirmar en el form
let formularioCompra = document.getElementById("formularioCompra");
let cantidadEntradas = document.getElementById("cantidadEntradas");
formularioCompra.addEventListener("submit", validarFormulario);

// Genero tabla en el DOM para resumen de compra
let compra = document.getElementById("compra");

let tituloTabla = document.createElement("h4");
tituloTabla.setAttribute("class", "text-light");
tituloTabla.innerHTML = "Tu compra:";
compra.appendChild(tituloTabla);

let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped table-dark");

let tablaHead = document.createElement("thead");
tablaHead.setAttribute("class", "bg-dark");

let header0 = document.createElement("th");
header0.innerHTML = "Cantidad";
let header1 = document.createElement("th");
header1.innerHTML = "Fecha Del Recital";
let header2 = document.createElement("th");
header2.innerHTML = "Ubicacion";
let header4 = document.createElement("th");
header4.innerHTML = "Fecha De Entrega";
let header5 = document.createElement("th");
header5.innerHTML = "Sub-Total";

tablaHead.appendChild(header0);
tablaHead.appendChild(header1);
tablaHead.appendChild(header2);
tablaHead.appendChild(header4);
tablaHead.appendChild(header5);

tabla.appendChild(tablaHead);

let tablaBody = document.createElement("tbody");
tabla.appendChild(tablaBody);
compra.appendChild(tabla);

// Funcion para resetear el formulario
function resetearFormulario() {
    errorCantidadEntradas.innerHTML = "";
    errorFechaRecitalVacia.innerHTML = "";
    errorUbicacionVacia.innerHTML = "";
    errorFechaRetiroVacia.innerHTML = "";
    formularioCompra.reset();
}

// Funcion para validar el formulario y pasarle los valores validados a los objetos
function validarFormulario(e) {

    e.preventDefault();

    let errorCantidadEntradas = document.getElementById("errorCantidadEntradas");
    let errorFechaRecitalVacia = document.getElementById("errorFechaRecitalVacia");
    let errorUbicacionVacia = document.getElementById("errorUbicacionVacia");
    let errorFechaRetiroVacia = document.getElementById("errorFechaRetiroVacia");

    if (!(parseInt(cantidadEntradas.value) > 0)) {
        errorCantidadEntradas.innerHTML = "Por favor ingresa un valor numerico mayor a 0";
    } else {
        errorCantidadEntradas.innerHTML = "";
    }

    if (opcionesFechaRecital.value == "-1") {
        errorFechaRecitalVacia.innerHTML = "Por favor selecciona una fecha para el recital";
    } else {
        errorFechaRecitalVacia.innerHTML = "";
    }

    if (opcionesUbicacion.value == "-1") {
        errorUbicacionVacia.innerHTML = "Por favor selecciona una ubicacion";
    } else {
        errorUbicacionVacia.innerHTML = "";
    }

    if (opcionesFechaRetiro.value == "-1") {
        errorFechaRetiroVacia.innerHTML = "Por favor selecciona una fecha para retirar tu entrada";
    } else {
        errorFechaRetiroVacia.innerHTML = "";
    }

    if (errorCantidadEntradas.innerHTML == "" && errorFechaRecitalVacia.innerHTML == "" && errorUbicacionVacia.innerHTML == "" && errorFechaRetiroVacia.innerHTML == "") {
        let cantidadDeEntradas = parseInt(cantidadEntradas.value);
        let opcionFechaRecital = opcionesFechaRecital.options[opcionesFechaRecital.selectedIndex].text;

        let opcionUbicacion = opcionesUbicacion.options[opcionesUbicacion.selectedIndex].text;;
        let ubicacionElegida;
        ubicaciones.forEach((ubicacion) => {
            if ((ubicacion.nombre + ' - $' + ubicacion.precio) == opcionUbicacion) {
                ubicacionElegida = ubicacion;
            }
        });

        let opcionFechaRetiro = opcionesFechaRetiro.options[opcionesFechaRetiro.selectedIndex].text;

        //formularioCompra.reset();
        resetearFormulario();
        $('#modalEntradas').modal('hide');

        if (JSON.parse(localStorage.getItem("Entradas")) != null) {
            entradas = JSON.parse(localStorage.getItem("Entradas"));
            let nuevaEntrada = new Entrada(opcionFechaRecital, ubicacionElegida, opcionFechaRetiro, cantidadDeEntradas);
            entradas.push(nuevaEntrada);
            localStorage.setItem("Entradas", JSON.stringify(entradas));
        } else {
            let nuevaEntrada = new Entrada(opcionFechaRecital, ubicacionElegida, opcionFechaRetiro, cantidadDeEntradas);
            entradas.push(nuevaEntrada);
            localStorage.setItem("Entradas", JSON.stringify(entradas));
        }

        generarFilasCompra();
        calcularTotal();

        return true;
    } else {
        return false;
    }
}

// Funcion para generar dinamicamente las filas en la tabla de compra en el DOM
function generarFilasCompra() {
    let imprimirValores = JSON.parse(localStorage.getItem("Entradas"));

    if (imprimirValores != null) {
        imprimirValores.forEach(element => {
            let fila = document.createElement("tr");

            let celda1 = document.createElement("td");
            celda1.textContent = `${element.cantidad}`;
            fila.appendChild(celda1);
            let celda2 = document.createElement("td");
            celda2.textContent = `${element.fechaRecital}`;
            fila.appendChild(celda2);
            let celda3 = document.createElement("td");
            celda3.textContent = `${element.ubicacion.nombre + ' - $' + element.ubicacion.precio}`;
            fila.appendChild(celda3);
            let celda4 = document.createElement("td");
            celda4.textContent = `${element.fechaRetiro}`;
            fila.appendChild(celda4);
            let celda5 = document.createElement("td");
            celda5.textContent = `${element.cantidad * element.ubicacion.precio}`;
            fila.appendChild(celda5);

            tablaBody.appendChild(fila);
        });
    } else {
        let mensaje = "El Local Storage esta vacio";
        console.log(mensaje);
    }

}

// Funcion para calcular el total de la compra
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < tabla.rows.length; i++) {
        total = total + parseFloat(tabla.rows[i].cells[4].innerHTML);
    }
    let totalCompra = document.getElementById("totalCompra");
    totalCompra.innerHTML = `Total: ${total}`;
}

/*
// Funcion para manejar el stock de entradas
function calcularStock(fila, cantidadDeEntradas) {
    for (let i = 0; i < tablaStock.rows.length; i++) {
        if (tablaStock.rows[i].cells[0].innerHTML == fila.cells[1].innerHTML && tablaStock.rows[i].cells[1].innerHTML == fila.cells[2].innerHTML) {
            tablaStock.rows[i].cells[2].innerHTML = parseInt(tablaStock.rows[i].cells[2].innerHTML) - cantidadDeEntradas;
        }
    }
}
*/