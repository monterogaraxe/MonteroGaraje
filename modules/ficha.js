/*
========================================
FICHA DEL VEHÍCULO
Proyecto Atlas 3.0
MonteroGaraje
========================================
*/

const Ficha = {

    mostrar(coche){

        const resultado = document.getElementById("resultado");

        const indice = Indice.calcular(coche);

        const analisis = MonteroAI.analizar(coche);

        resultado.innerHTML = `

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <img
                src="${coche.imagen}"
                alt="${coche.marca} ${coche.modelo}"
                class="foto-coche"
            >

            <hr><br>

            <p><strong>Generación:</strong> ${coche.generacion}</p>

            <p><strong>Versión:</strong> ${coche.version}</p>

            <p><strong>Motor:</strong> ${coche.motor}</p>

            <p><strong>Potencia:</strong> ${coche.potencia} CV</p>

            <p><strong>Combustible:</strong> ${coche.combustible}</p>

            <p><strong>Año:</strong> ${coche.anio}</p>

            <p><strong>Kilómetros:</strong> ${coche.km.toLocaleString("es-ES")} km</p>

            <p><strong>Cambio:</strong> ${coche.cambio}</p>

            <p><strong>Color:</strong> ${coche.color}</p>

            <p><strong>País:</strong> ${coche.pais}</p>

            <p><strong>Propietarios:</strong> ${coche.propietarios}</p>

            <p><strong>Historial:</strong> ${coche.historial ? "✅ Disponible" : "❌ No disponible"}</p>

            <p><strong>ITV:</strong> ${coche.itv ? "✅ Al día" : "❌ Pendiente"}</p>

            <p><strong>Etiqueta:</strong> ${coche.etiqueta}</p>

            <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

            <br>

            <h3>⭐ Índice Montero</h3>

            <h2>${indice}/100</h2>

            <br>

            <h3>🤖 MonteroAI</h3>

            <p>${analisis}</p>

        </div>

        `;

    }

};
