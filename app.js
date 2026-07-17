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
const inputBusqueda = document.getElementById("busqueda");
const botonBuscar = document.getElementById("btnBuscar");
const resultados = document.getElementById("resultados");

botonBuscar.addEventListener("click", () => {
    const texto = inputBusqueda.value.toLowerCase();

    const encontrados = coches.filter(coche =>
        coche.marca.toLowerCase().includes(texto) ||
        coche.modelo.toLowerCase().includes(texto)
    );

    resultados.innerHTML = "";

    if (encontrados.length === 0) {
        resultados.innerHTML = "<p>No se han encontrado vehículos.</p>";
        return;
    }

    encontrados.forEach(coche => {
        resultados.innerHTML += `
            <div class="card">
                <h3>${coche.marca} ${coche.modelo}</h3>
                <p>País: ${coche.pais}</p>
                <p>Precio: ${coche.precio.toLocaleString()} €</p>
            </div>
        `;
    });
});
