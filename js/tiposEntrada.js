// Defino array de fechas de recital con objetos literales

class Entrada {
    constructor(fechaRecital, ubicacion, fechaRetiro, cantidad) {
        this.fechaRecital = fechaRecital;
        this.ubicacion = ubicacion;
        this.fechaRetiro = fechaRetiro;
        this.cantidad = cantidad;
    }
}

const fechasRecital = ['15/02/2022', '18/02/2022', '21/02/2022', '24/02/2022'];

const ubicaciones = [{ id: 1, nombre: 'General', precio: 1500 },
{ id: 2, nombre: 'Campo', precio: 4000 },
{ id: 3, nombre: 'Platea Oeste', precio: 6000 },
{ id: 4, nombre: 'Platea Este', precio: 6000 },
{ id: 5, nombre: 'Campo VIP', precio: 10000 }
];

const fechasRetiro = ['15/01/2022', '18/01/2022', '21/01/2022'];

//const stockEntradas = 100;