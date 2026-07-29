/*
========================================
FICHA
Proyecto Atlas 3.0
========================================
*/

const Ficha = {

    mostrar(coche){

        const resultado = document.getElementById("resultado");

        resultado.innerHTML = `

        <div class="card">

            <h2>${coche.marca} ${coche.modelo}</h2>

            <hr><br>

            <p><strong>Generación:</strong> ${coche.generacion}</p>

            <p><strong>Versión:</strong> ${coche.version}</p>

            <p><strong>Motor:</strong> ${coche.motor}</p>

            <p><strong>Potencia:</strong> ${coche.potencia} CV</p>

            <p><strong>Año:</strong> ${coche.anio}</p>

            <p><strong>Kilómetros:</strong> ${coche.km.toLocaleString("es-ES")} km</p>

            <p><strong>Precio:</strong> ${coche.precio.toLocaleString("es-ES")} €</p>

            <br>

            <button onclick="buscarCoche()">
                ⬅ Volver
            </button>

        </div>

        `;

    }

};
