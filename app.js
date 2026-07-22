/*
========================================
APP PRINCIPAL
MonteroGaraje Atlas 3.0
========================================
*/

function buscarCoche() {

    const texto = document
        .getElementById("busqueda")
        .value;

    const resultado = document
        .getElementById("resultado");

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

    let html = "";

    coches.forEach(coche => {

        html += `
        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <p><strong>Generación:</strong> ${coche.generacion}</p>

            <p><strong>Versión:</strong> ${coche.version}</p>

            <p><strong>Motor:</strong> ${coche.motor}</p>

            <p><strong>Potencia:</strong> ${coche.potencia} CV</p>

            <p><strong>Combustible:</strong> ${coche.combustible}</p>

            <p><strong>País:</strong> ${coche.pais}</p>

            <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

        </div>
        `;

    });

    resultado.innerHTML = html;

}
