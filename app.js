/*
========================================
MONTEROGARAJE
APP PRINCIPAL
Proyecto Atlas
========================================
*/

function buscarCoche(){

    const texto = document
        .getElementById("busqueda")
        .value;

    const resultado = document
        .getElementById("resultado");

    const coches = Buscador.buscar(texto);

    if(coches.length===0){

        resultado.innerHTML=`

        <div class="card">

            <h2>❌ No encontrado</h2>

            <p>No existe todavía en el Catálogo Atlas.</p>

        </div>

        `;

        return;

    }

    let html="";

    coches.forEach(coche=>{

        html+=`

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <p><strong>Generaciones:</strong></p>

            <ul>

            ${coche.generaciones.map(g=>`<li>${g}</li>`).join("")}

            </ul>

            <p><strong>Versiones:</strong></p>

            <ul>

            ${coche.versiones.map(v=>`<li>${v}</li>`).join("")}

            </ul>

        </div>

        `;

    });

    resultado.innerHTML=html;

}
