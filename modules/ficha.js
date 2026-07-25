/*
========================================
FICHA DEL VEHÍCULO
Proyecto Atlas 5.0
MonteroGaraje
========================================
*/

const Ficha = {

    mostrar(coche){

        const resultado = document.getElementById("resultado");

        const indice = Indice.calcular(coche);

        const nivel = Indice.nivel(indice);

        const analisis = MonteroAI.analizar(coche);

        const mercado = Mercado.analizar(coche);

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

            <hr><br>

            <h3>📊 Análisis de mercado</h3>

            <p><strong>Precio:</strong> ${mercado.precio.toLocaleString("es-ES")} €</p>

            <p><strong>Precio medio Europa:</strong> ${mercado.mercado.toLocaleString("es-ES")} €</p>

            <p><strong>Ahorro:</strong> ${mercado.ahorro.toLocaleString("es-ES")} €</p>

            <p><strong>${mercado.estado}</strong></p>

            <hr><br>

            <h3>⭐ Índice Montero</h3>

            <div class="barra-indice">
                <div class="barra-progreso" style="width:${indice}%"></div>
            </div>

            <h2>${indice}/100</h2>

            <p><strong>${nivel}</strong></p>

            <hr><br>

            <h3>🤖 MonteroAI</h3>

            <p>${analisis}</p>

        </div>

        `;

    }

};
