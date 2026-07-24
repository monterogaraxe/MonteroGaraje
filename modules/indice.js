/*
========================================
ÍNDICE MONTERO
Proyecto Atlas 2.0
========================================
*/

const Indice = {

    calcular(coche){

        let puntos = 50;

        // Precio
        if(coche.precio <= 10000){
            puntos += 25;
        }else if(coche.precio <= 20000){
            puntos += 15;
        }else if(coche.precio <= 30000){
            puntos += 10;
        }

        // País
        if(coche.pais === "Alemania"){
            puntos += 10;
        }

        // Potencia
        if(coche.potencia >= 300){
            puntos += 10;
        }else if(coche.potencia >= 200){
            puntos += 5;
        }

        // Historial
        if(coche.historial){
            puntos += 5;
        }

        // ITV
        if(coche.itv){
            puntos += 5;
        }

        // Kilómetros
        if(coche.km <= 100000){
            puntos += 10;
        }else if(coche.km <= 150000){
            puntos += 5;
        }

        if(puntos > 100){
            puntos = 100;
        }

        return puntos;

    }

};
