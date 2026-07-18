function buscarCoche() {

    const coche = document.getElementById("busqueda").value;

    const resultado = document.getElementById("resultado");

    if(coche===""){
        resultado.innerHTML="<p style='color:red;'>Escribe un coche.</p>";
        return;
    }

    resultado.innerHTML=`
    <div style="
    margin-top:40px;
    background:#1e293b;
    padding:25px;
    border-radius:15px;
    ">

        <h2>${coche}</h2>

        <p>⭐ Índice Montero: 87/100</p>

        <p>💶 Precio medio: Próximamente</p>

        <p>📋 Historial: Próximamente</p>

        <p>🚛 Transporte: Próximamente</p>

        <p>⚖️ Cargas administrativas: Próximamente</p>

        <p>🛡 Seguro estimado: Próximamente</p>

        <p>🤖 MonteroAI: En desarrollo...</p>

    </div>
    `;
}
