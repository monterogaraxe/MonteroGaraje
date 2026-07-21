/*
========================================
ÍNDICE MONTERO
VERSIÓN 1.0
========================================
*/

const IndiceMontero = {

    calcular(datos){

        let puntuacion = 100;

        if(datos.accidentes)
            puntuacion -= 20;

        if(!datos.libroMantenimiento)
            puntuacion -= 10;

        if(datos.km > 200000)
            puntuacion -= 15;

        if(datos.propietarios > 3)
            puntuacion -= 10;

        if(datos.importado)
            puntuacion -= 2;

        if(datos.precio < datos.precioMercado * 0.75)
            puntuacion += 5;

        if(puntuacion > 100)
            puntuacion = 100;

        if(puntuacion < 0)
            puntuacion = 0;

        return puntuacion;

    }

};
