/*
========================================
FICHA DEL VEHÍCULO
Proyecto Atlas 2.1
========================================
*/

const Ficha = {

    mostrar(coche){

        const resultado = document.getElementById("resultado");

        const indice = Indice.calcular(coche);
        const nivel = Indice.nivel(indice);

        const analisis = MonteroAI.analizar(coche);

        const mercado = Mercado.calcular(coche);

        resultado.innerHTML = `

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <img class="foto-coche"
                 src="${coche.imagen}"
                 alt="${coche.marca} ${coche.modelo}">

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

            <p><strong>Historial:</strong> ${coche.historial}</p>
            <p><strong>ITV:</strong> ${coche.itv}</p>

            <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

            <p><strong>Precio de mercado:</strong> ${mercado.valor.toLocaleString("es-ES")} €</p>

            <p><strong>Diferencia:</strong> ${mercado.estado}</p>

            <br>

            <h3>⭐ Índice Montero</h3>

            <h2>${indice}/100</h2>

            <p>${nivel}</p>

            <br>

            <h3>🤖 MonteroAI</h3>

            <p>${analisis}</p>

        </div>

        `;

    }

};
