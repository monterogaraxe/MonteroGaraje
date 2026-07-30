/*
========================================
FICHA DEBUG
Proyecto Atlas 3.0.1
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
                    class="foto-coche"
                    onerror="this.style.display='none'">

                <hr>

                <p><strong>Generación:</strong> ${coche.generacion}</p>
                <p><strong>Versión:</strong> ${coche.version}</p>
                <p><strong>Motor:</strong> ${coche.motor}</p>
                <p><strong>Potencia:</strong> ${coche.potencia} CV</p>
                <p><strong>Año:</strong> ${coche.anio}</p>
                <p><strong>Km:</strong> ${coche.km.toLocaleString("es-ES")} km</p>
                <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

                <hr>

                <h3>⭐ Índice Montero</h3>

                <p>${indice}/100</p>

                <p>${nivel}</p>

                <hr>

                <h3>💶 Mercado</h3>

                <p>Valor mercado: ${mercado.valor.toLocaleString("es-ES")} €</p>

                <p>Ahorro: ${mercado.ahorro.toLocaleString("es-ES")} €</p>

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

                <p><strong>Mensaje:</strong></p>

                <pre style="color:red;white-space:pre-wrap;">
${error.message}
                </pre>

                <p><strong>Stack:</strong></p>

                <pre style="font-size:12px;white-space:pre-wrap;">
${error.stack}
                </pre>

                <button onclick="buscarCoche()">

                    ⬅ Volver

                </button>

            </div>

            `;

            console.error(error);

        }

    }

};
