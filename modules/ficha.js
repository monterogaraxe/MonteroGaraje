/*
========================================
FICHA DEL VEHÍCULO
Proyecto Atlas
========================================
*/

const Ficha = {

    mostrar(coche){

        const resultado = document.getElementById("resultado");

        resultado.innerHTML = `

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <hr>

            <p><strong>Generación:</strong> ${coche.generacion}</p>

            <p><strong>Versión:</strong> ${coche.version}</p>

            <p><strong>Motor:</strong> ${coche.motor}</p>

            <p><strong>Potencia:</strong> ${coche.potencia} CV</p>

            <p><strong>Combustible:</strong> ${coche.combustible}</p>

            <p><strong>País:</strong> ${coche.pais}</p>

            <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

            <hr>

            <h3>⭐ Índice Montero</h3>

            <p>Calculando...</p>

            <h3>🤖 MonteroAI</h3>

            <p>Analizando vehículo...</p>

        </div>

        `;

    }

};
