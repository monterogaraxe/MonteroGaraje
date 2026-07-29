/*
========================================
APP.JS
Proyecto Atlas 3.0
MonteroGaraje
========================================
*/

function buscarCoche() {

    const texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase()
        .trim();

    const resultado = document.getElementById("resultado");

    if (texto === "") {

        resultado.innerHTML = `
        <div class="card">
            <h2>⚠️ Escribe una búsqueda.</h2>
        </div>
        `;

        return;
    }

    const coches = Buscador.buscar(texto);

    if (coches.length === 0) {

        resultado.innerHTML = `
        <div class="card">
            <h2>❌ No se encontraron vehículos.</h2>
        </div>
        `;

        return;
    }

    resultado.innerHTML = "";

    coches.forEach(coche => {

        resultado.innerHTML += `

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <p>${coche.generacion} · ${coche.version}</p>

            <p><strong>${coche.precio.toLocaleString("es-ES")} €</strong></p>

            <button onclick="Ficha.mostrar(VEHICULOS.find(v => v.id === '${coche.id}'))">
                🔍 Analizar
            </button>

        </div>

        `;

    });

}
