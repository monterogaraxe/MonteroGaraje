/*
========================================
MONTERO AI
Proyecto Atlas 2.0
========================================
*/

const MonteroAI = {

    analizar(coche){

        let mensaje = [];

        if(coche.precio < 20000){
            mensaje.push("💰 Precio competitivo.");
        }else{
            mensaje.push("💰 Precio dentro de la media.");
        }

        if(coche.historial){
            mensaje.push("📋 Historial disponible.");
        }else{
            mensaje.push("⚠️ Sin historial confirmado.");
        }

        if(coche.km < 100000){
            mensaje.push("✅ Kilometraje bajo.");
        }else if(coche.km < 180000){
            mensaje.push("🟡 Kilometraje razonable.");
        }else{
            mensaje.push("🔧 Kilometraje elevado, revisar mantenimiento.");
        }

        if(coche.propietarios === 1){
            mensaje.push("⭐ Un solo propietario.");
        }

        return mensaje.join("<br>");

    }

};
