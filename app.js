/*
========================================
APP PRINCIPAL
Proyecto Atlas 2.0
========================================
*/

console.log("Atlas iniciado");

function buscarCoche() {

    const texto = document
        .getElementById("busqueda")
        .value
        .trim();

    const resultado = document.getElementById("resultado");

    if (texto === "") {

        resultado.innerHTML = `
        <div class="card">
            <h2>🔎 Escribe una búsqueda</h2>
            <p>Ejemplo: Golf, RS3, Focus RS...</p>
        </div>
        `;

        return;

    }

    const coches = Buscador.buscar(texto);

    if (coches.length === 0) {

        resultado.innerHTML = `
        <div class="card">
            <h2>❌ No encontrado</h2>
            <p>No existen resultados para "${texto}".</p>
        </div>
        `;

        return;

    }

    if (coches.length === 1) {

        Ficha.mostrar(coches[0]);

        return;

    }

    let html = "";

    coches.forEach(coche => {

        const indice = Indice.calcular(coche);

        html += `

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <p><strong>Generación:</strong> ${coche.generacion}</p>

            <p><strong>Versión:</strong> ${coche.version}</p>

            <p><strong>Motor:</strong> ${coche.motor}</p>

            <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

            <p><strong>⭐ Índice Montero:</strong> ${indice}/100</p>

            <button onclick="Ficha.mostrar(VEHICULOS.find(v => v.motor === '${coche.motor}'))">
                Analizar
            </button>

        </div>

        `;

    });

    resultado.innerHTML = html;

}
