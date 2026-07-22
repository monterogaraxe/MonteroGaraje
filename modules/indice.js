/*
========================================
ÍNDICE MONTERO
Proyecto Atlas
========================================
*/

const Indice = {

    calcular(coche){

        let puntos = 50;

        if(coche.precio < 15000){
            puntos += 20;
        }

        if(coche.pais === "Alemania"){
            puntos += 10;
        }

        if(coche.potencia > 250){
            puntos += 10;
        }

        if(puntos > 100){
            puntos = 100;
        }

        return puntos;

    }

};
