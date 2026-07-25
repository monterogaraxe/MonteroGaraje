/*
========================================
ÍNDICE MONTERO 2.0
Proyecto Atlas
========================================
*/

const Indice = {

    calcular(coche){

        let puntos = 50;

        if(coche.historial) puntos += 15;

        if(coche.itv) puntos += 10;

        if(coche.propietarios <= 2) puntos += 10;

        if(coche.km < 180000) puntos += 10;

        if(coche.pais === "Alemania") puntos += 5;

        if(coche.precio < 15000) puntos += 10;

        if(puntos > 100){
            puntos = 100;
        }

        return puntos;

    },

    nivel(puntos){

        if(puntos >= 90) return "🟢 Excelente compra";

        if(puntos >= 75) return "🟢 Muy recomendable";

        if(puntos >= 60) return "🟡 Buena compra";

        if(puntos >= 40) return "🟠 Revisar antes de comprar";

        return "🔴 Riesgo elevado";

    }

};
