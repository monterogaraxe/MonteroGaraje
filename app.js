/*
========================================
MONTEROGARAJE
APP PRINCIPAL
Proyecto Atlas 2.0
========================================
*/

function buscarCoche(){

    const texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase()
        .trim();

    const resultado = document.getElementById("resultado");

    const coches = Buscador.buscar(texto);

    if(coches.length===0){

        resultado.innerHTML=`

        <div class="card">

            <h2>❌ Vehículo no encontrado</h2>

            <p>

            MonteroAI todavía no dispone de información sobre este vehículo.

            </p>

        </div>

        `;

        return;

    }

    let html="";

    coches.forEach(coche=>{

        const info = CATALOGO[coche.marca][coche.modelo].informacion;

        html+=`

        <div class="card">

            <h2>🚗 ${coche.marca} ${coche.modelo}</h2>

            <hr>

            <p><strong>⭐ Índice Montero:</strong> ${info.indiceMontero}/100</p>

            <p><strong>💶 Mejor precio encontrado:</strong> ${info.mejorPrecio.toLocaleString()} €</p>

            <p><strong>📊 Precio medio Europa:</strong> ${info.precioMedio.toLocaleString()} €</p>

            <p><strong>🌍 País recomendado:</strong> ${info.pais}</p>

            <p><strong>👤 Tipo de vendedor:</strong> ${info.vendedor}</p>

            <p><strong>📋 Historial:</strong> ${info.historial}</p>

            <p><strong>🚛 Transporte:</strong> ${info.transporte} €</p>

            <p><strong>📈 Revalorización:</strong> ${info.revalorizacion}</p>

            <hr>

            <h3>📑 Gestoría recomendada</h3>

            <p><strong>Comunidad:</strong> ${info.gestoria.comunidad}</p>

            <p><strong>Nombre:</strong> ${info.gestoria.nombre}</p>

            <p><strong>Teléfono:</strong> ${info.gestoria.telefono}</p>

            <hr>

            <h3>🚘 Generaciones</h3>

            <ul>

            ${coche.generaciones.map(g=>`<li>${g}</li>`).join("")}

            </ul>

            <h3>⚙️ Versiones</h3>

            <ul>

            ${coche.versiones.map(v=>`<li>${v}</li>`).join("")}

            </ul>
                        <hr>

            <h3>🤖 MonteroAI</h3>

            <p>

            Esta unidad presenta un índice de

            <strong>${info.indiceMontero}/100</strong>.

            Actualmente es una de las mejores opciones disponibles

            según los datos del Catálogo Atlas.

            </p>

            <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">

                <button>📷 Ver fotos</button>

                <button>📋 Ver historial</button>

                <button>🌍 Ver anuncios europeos</button>

                <button>❤️ Guardar</button>

            </div>

        </div>

        `;

    });

    resultado.innerHTML = html;

}
