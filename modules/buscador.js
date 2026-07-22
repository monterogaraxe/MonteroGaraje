/*
========================================
BUSCADOR ATLAS 3.0
MonteroGaraje
========================================
*/

const Buscador = {

    buscar(texto){

        texto = texto.toLowerCase().trim();

        return VEHICULOS.filter(coche => {

            return (

                coche.marca.toLowerCase().includes(texto) ||

                coche.modelo.toLowerCase().includes(texto) ||

                coche.generacion.toLowerCase().includes(texto) ||

                coche.version.toLowerCase().includes(texto) ||

                coche.motor.toLowerCase().includes(texto)

            );

        });

    }

};
