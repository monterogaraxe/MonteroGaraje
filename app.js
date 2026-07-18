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
            <h2>⚠ Escribe una marca, modelo o VIN</h2>
        </div>
        `;

        return;
    }

    const coche = DATABASE.coches.find(c =>

        c.busquedas.some(b => texto.includes(b))

    );

    if (!coche) {

        resultado.innerHTML = `
        <div class="card">
            <h2>❌ Vehículo no encontrado</h2>
            <p>Próximamente MonteroGaraje buscará este coche en toda Europa.</p>
        </div>
        `;

        return;
    }

    resultado.innerHTML = `

    <div class="card">

        <img src="${coche.imagen}" alt="${coche.modelo}">

        <h2>${coche.marca} ${coche.modelo}</h2>

        <p><strong>⭐ Índice Montero:</strong> ${coche.indice}/100</p>

        <p><strong>💶 Precio medio Europa:</strong> ${coche.precioEuropa}</p>

        <p><strong>🌍 Mejor país:</strong> ${coche.mejorPais}</p>

        <p><strong>⛽ Combustible:</strong> ${coche.combustible}</p>

        <p><strong>⚙ Cambio:</strong> ${coche.cambio}</p>

        <p><strong>🏁 Potencia:</strong> ${coche.potencia}</p>

        <p><strong>🚘 Tracción:</strong> ${coche.traccion}</p>

        <hr>

        <h3>🤖 MonteroAI</h3>

        <p>${coche.ia}</p>

        <hr>

        <button>📷 Ver galería</button>

        <button>📋 Historial</button>

        <button>💶 Comparar en Europa</button>

    </div>

    `;

}
