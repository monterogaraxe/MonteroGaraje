/*
========================================
MONTERO AI
Proyecto Atlas
========================================
*/

const MonteroAI = {

    analizar(coche){

        let mensaje = "";

        if(coche.precio < 20000){

            mensaje = "🟢 Excelente oportunidad de compra.";

        }else if(coche.precio < 40000){

            mensaje = "🟡 Precio dentro del mercado.";

        }else{

            mensaje = "🔴 Precio elevado. Conviene comparar más unidades.";

        }

        return mensaje;

    }

};
