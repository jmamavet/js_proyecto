// Genero en el DOM todas las opciones para la entrada tomando los valores de los objetos literales

let opcionesFechaRecital = document.getElementById("opcionesFechaRecital");
fechasRecital.forEach((fecha, indice) => {
    let opcionFechaRecital = document.createElement("option");
    opcionFechaRecital.setAttribute("value", indice);
    opcionFechaRecital.innerHTML = fecha;
    opcionesFechaRecital.appendChild(opcionFechaRecital);
});

let opcionesUbicacion = document.getElementById("opcionesUbicacion");
ubicaciones.forEach((ubicacion, indice) => {
    let opcionUbicacion = document.createElement("option");
    opcionUbicacion.setAttribute("value", indice);
    opcionUbicacion.innerHTML = `${ubicacion.nombre} - $${ubicacion.precio}`;
    opcionesUbicacion.appendChild(opcionUbicacion);
});

let opcionesFechaRetiro = document.getElementById("opcionesFechaRetiro");
fechasRetiro.forEach((fecha, indice) => {
    let opcionFechaRetiro = document.createElement("option");
    opcionFechaRetiro.setAttribute("value", indice);
    opcionFechaRetiro.innerHTML = fecha;
    opcionesFechaRetiro.appendChild(opcionFechaRetiro);
});


/*
let opcionesFechaRecital = document.getElementById("opcionesFechaRecital");
let fechasUnicas = [...new Set(tiposEntrada.map(item => item.fecha))];
fechasUnicas.forEach((element, index) => {
    let opcionFechaRecital = document.createElement("option");
    opcionFechaRecital.setAttribute("value", index);
    opcionFechaRecital.innerHTML = element;
    opcionesFechaRecital.appendChild(opcionFechaRecital);
});

let opcionesUbicacion = document.getElementById("opcionesUbicacion");
let ubicacionesUnicas = [...new Set(tiposEntrada.map(item => item.ubicacion + " - $" + item.precio))];
ubicacionesUnicas.forEach((element, index) => {
    let opcionUbicacion = document.createElement("option");
    opcionUbicacion.setAttribute("value", index);
    opcionUbicacion.innerHTML = element;
    opcionesUbicacion.appendChild(opcionUbicacion);
});

let fechasEntrega = ['05/01/2022', '08/01/2022', '11/01/2022'];
let opcionesFechaRetiro = document.getElementById("opcionesFechaRetiro");
fechasEntrega.forEach((element, index) => {
    let opcionFechaRetiro = document.createElement("option");
    opcionFechaRetiro.setAttribute("value", index);
    opcionFechaRetiro.innerHTML = element;
    opcionesFechaRetiro.appendChild(opcionFechaRetiro);
});


*/