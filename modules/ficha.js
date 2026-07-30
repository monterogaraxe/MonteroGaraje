/*
========================================
FICHA
Proyecto Atlas 3.1
MonteroGaraje
========================================
*/

const Ficha = {

    mostrar(coche){

        const resultado = document.getElementById("resultado");

        try{

            const indice = Indice.calcular(coche);
            const nivel = Indice.nivel(indice);

            const mercado = Mercado.calcular(coche);

            const analisis = MonteroAI.analizar(coche);

            resultado.innerHTML = `

            <div class="card ficha">

                <h2>${coche.marca} ${coche.modelo}</h2>

                <img
                    src="${coche.imagen}"
                    alt="${coche.marca} ${coche.modelo}"
                    class="foto-coche"
                    onerror="this.style.display='none'">

                <hr>

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

                <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

                <hr>

                <h3>⭐ Índice Montero</h3>

                <div class="barra-indice">

                    <div
                        class="barra-indice-fill"
                        style="width:${indice}%">

                    </div>

                </div>

                <h2>${indice}/100</h2>

                <p>${nivel}</p>

                <hr>

                <h3>💶 Mercado</h3>

                <p><strong>Valor de mercado:</strong> ${mercado.valor.toLocaleString("es-ES")} €</p>

                <p><strong>Ahorro:</strong> ${mercado.ahorro.toLocaleString("es-ES")} €</p>

                <p>${mercado.estado}</p>

                <hr>

                <h3>🤖 MonteroAI</h3>

                <p>${analisis}</p>

                <button onclick="buscarCoche()">

                    ⬅ Volver

                </button>

            </div>

            `;

        }catch(error){

            resultado.innerHTML = `

            <div class="card ficha">

                <h2>❌ ERROR DETECTADO</h2>

                <p><strong>${error.message}</strong></p>

                <pre>${error.stack}</pre>

                <button onclick="buscarCoche()">

                    ⬅ Volver

                </button>

            </div>

            `;

            console.error(error);

        }

    }

};
