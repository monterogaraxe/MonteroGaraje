function buscarCoche() {

    const coche = document.getElementById("busqueda").value.trim();
    const resultado = document.getElementById("resultado");

    if (coche === "") {

        resultado.innerHTML = `
        <div class="card">
            <h3>⚠ Atención</h3>
            <p>Escribe una marca, modelo, enlace o VIN.</p>
        </div>
        `;

        return;
    }

    resultado.innerHTML = `
    <div class="card">

        <h2>🚗 ${coche}</h2>

        <hr style="margin:15px 0;border:1px solid #334155;">

        <p><strong>⭐ Índice Montero:</strong> 87 / 100</p>

        <p><strong>💶 Precio de mercado:</strong> Calculando...</p>

        <p><strong>📋 Historial:</strong> Próximamente</p>

        <p><strong>🛠 Libro de mantenimiento:</strong> Próximamente</p>

        <p><strong>⚖ Cargas administrativas:</strong> Próximamente</p>

        <p><strong>🚛 Transporte:</strong> Próximamente</p>

        <p><strong>🛡 Seguro estimado:</strong> Próximamente</p>

        <p><strong>🤖 MonteroAI:</strong></p>

        <p>
        Estamos preparando el análisis inteligente de este vehículo.
        En futuras versiones aquí aparecerá un informe completo con
        valoración, riesgos y recomendación de compra.
        </p>

    </div>
    `;

}
