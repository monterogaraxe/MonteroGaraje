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
            <h2>⚠ Escribe un vehículo</h2>
            <p>Introduce una marca, modelo o VIN.</p>
        </div>
        `;

        return;
    }

    let cocheEncontrado = null;

    for (let coche of coches) {

        for (let palabra of coche.busqueda) {

            if (texto.includes(palabra)) {

                cocheEncontrado = coche;
                break;

            }

        }

        if (cocheEncontrado) break;

    }

    if (!cocheEncontrado) {

        resultado.innerHTML = `
        <div class="card">

            <h2>🔍 ${texto}</h2>

            <p>No hemos encontrado ese vehículo todavía.</p>

            <p>Próximamente MonteroGaraje buscará automáticamente en toda Europa.</p>

        </div>
        `;

        return;

    }

    resultado.innerHTML = `

    <div class="card">

        <img
            src="${cocheEncontrado.imagen}"
            alt="${cocheEncontrado.nombre}"
        >

        <h2>${cocheEncontrado.nombre}</h2>

        <p><strong>⭐ Índice Montero:</strong> ${cocheEncontrado.indice}/100</p>

        <p><strong>💶 Precio medio Europa:</strong> ${cocheEncontrado.precio}</p>

        <p><strong>🌍 Mejor país:</strong> ${cocheEncontrado.pais}</p>

        <p><strong>🤖 MonteroAI:</strong></p>

        <p>${cocheEncontrado.ia}</p>

    </div>

    `;

}
