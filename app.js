app.js
// MonteroGaraje
// Proyecto Atlas

console.log("MonteroGaraje iniciado");

const version = "0.1 Alpha";

const estado = {
    proyecto: "Activo",
    buscadorIA: false,
    comparador: false,
    baseDatos: []
};

console.log("Versión:", version);
console.log("Estado:", estado);
const coches = [
  {
    marca: "Volkswagen",
    modelo: "Golf GTI MK2",
    pais: "España",
    precio: 18000
  },
  {
    marca: "Audi",
    modelo: "RS3",
    pais: "Alemania",
    precio: 52000
  },
  {
    marca: "Cupra",
    modelo: "Formentor VZ5",
    pais: "Países Bajos",
    precio: 47000
  }
];

console.log("Base de datos de prueba:");
console.log(coches);
