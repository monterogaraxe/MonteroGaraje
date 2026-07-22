/*
========================================
APP PRINCIPAL
MonteroGaraje Atlas 3.1
========================================
*/

function buscarCoche() {

    const texto = document
        .getElementById("busqueda")
        .value
        .trim();

    if (texto === "") return;

    const coches = Buscador.buscar(texto);

    if (coches.length === 0) {

        document.getElementById("resultado").innerHTML = `
        <div class="card">
            <h2>❌ No encontrado</h2>
            <p>No existen resultados para "${texto}".</p>
        </div>
        `;

        return;

    }

    Anuncios.mostrar(coches);

}
