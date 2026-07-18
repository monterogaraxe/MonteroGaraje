function buscarCoche() {

    const coche = document.getElementById("busqueda").value.toLowerCase().trim();

    const resultado = document.getElementById("resultado");

    if(coche===""){
        resultado.innerHTML=`
        <div class="card">
            <h3>⚠ Escribe un vehículo</h3>
        </div>
        `;
        return;
    }

    let ficha="";

    if(coche.includes("focus")){

        ficha=`
        <div class="card">
        <h2>🚗 Ford Focus RS MK2</h2>
        <p>⭐ Índice Montero: 91/100</p>
        <p>💶 Precio medio Europa: 36.500 €</p>
        <p>🌍 País recomendado: Alemania</p>
        <p>📋 Historial: Disponible próximamente</p>
        <p>🤖 MonteroAI: Muy buena compra.</p>
        </div>`;
    }

    else if(coche.includes("rs3")){

        ficha=`
        <div class="card">
        <h2>🚗 Audi RS3</h2>
        <p>⭐ Índice Montero: 95/100</p>
        <p>💶 Precio medio Europa: 43.900 €</p>
        <p>🌍 País recomendado: Alemania</p>
        <p>📋 Historial: Disponible próximamente</p>
        <p>🤖 MonteroAI: Excelente compra.</p>
        </div>`;
    }

    else if(coche.includes("golf")){

        ficha=`
        <div class="card">
        <h2>🚗 Volkswagen Golf GTI</h2>
        <p>⭐ Índice Montero: 89/100</p>
        <p>💶 Precio medio Europa: Consultando...</p>
        <p>🌍 Comparando Europa...</p>
        <p>📋 Historial: Disponible próximamente</p>
        <p>🤖 MonteroAI: Analizando vehículo.</p>
        </div>`;
    }

    else{

        ficha=`
        <div class="card">
        <h2>🔍 ${coche}</h2>
        <p>Estamos preparando información para este modelo.</p>
        </div>`;
    }

    resultado.innerHTML=ficha;

}
