// Genero en el DOM todas las opciones para la entrada tomando los valores de los arrays de fechas y objetos literales de ubicaciones

const fechasRecital = ['15/02/2022', '18/02/2022', '21/02/2022', '24/02/2022'];

const ubicaciones = [{ id: 1, nombre: 'General', precio: 1500 },
{ id: 2, nombre: 'Campo', precio: 4000 },
{ id: 3, nombre: 'Platea Oeste', precio: 6000 },
{ id: 4, nombre: 'Platea Este', precio: 6000 },
{ id: 5, nombre: 'Campo VIP', precio: 10000 }
];

const fechasRetiro = ['15/01/2022', '18/01/2022', '21/01/2022'];

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