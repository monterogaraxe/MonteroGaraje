/*
========================================
MERCADO
Proyecto Atlas
MonteroGaraje
========================================
*/

const Mercado = {

    calcular(coche){

        const ahorro = coche.precioMercado - coche.precio;

        let estado = "🔴 Precio por encima del mercado";

        if (ahorro > 5000) {

            estado = "🟢 Oportunidad excelente";

        } else if (ahorro > 2000) {

            estado = "🟢 Muy buena compra";

        } else if (ahorro > 0) {

            estado = "🟡 Precio competitivo";

        }

        return {

            valor: coche.precioMercado,

            ahorro: ahorro,

            estado: estado

        };

    }

};
