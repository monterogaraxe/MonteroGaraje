/*
========================================
MONTERO AI 2.0
Proyecto Atlas
========================================
*/

const MonteroAI = {

    analizar(coche){

        let mensaje = "";

        if(coche.precio < coche.precioMercado){

            mensaje += "✅ Esta unidad está por debajo del precio medio europeo. ";

        }else{

            mensaje += "⚠️ El precio está por encima de la media europea. ";

        }

        if(coche.historial){

            mensaje += "Dispone de historial de mantenimiento. ";

        }else{

            mensaje += "No consta historial de mantenimiento. ";

        }

        if(coche.propietarios <= 2){

            mensaje += "Ha tenido pocos propietarios. ";

        }

        if(coche.km < 180000){

            mensaje += "El kilometraje es adecuado para su antigüedad. ";

        }

        mensaje += "MonteroAI recomienda revisar el vehículo presencialmente antes de cerrar la compra.";

        return mensaje;

    }

};
