/*
========================================
ANUNCIOS
MonteroGaraje Atlas
========================================
*/

const Anuncios = {

    mostrar(coches){

        const resultado = document.getElementById("resultado");

        let html = "";

        coches.forEach(coche=>{

            html += `

            <div class="card anuncio">

                <h2>${coche.marca} ${coche.modelo}</h2>

                <p><strong>Generación:</strong> ${coche.generacion}</p>

                <p><strong>Versión:</strong> ${coche.version}</p>

                <p><strong>Motor:</strong> ${coche.motor}</p>

                <p><strong>Potencia:</strong> ${coche.potencia} CV</p>

                <p><strong>País:</strong> ${coche.pais}</p>

                <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

                <button>
                    Analizar con MonteroAI
                </button>

            </div>

            `;

        });

        resultado.innerHTML = html;

    }

};
