/*
========================================
MONTEROGARAJE
BUSCADOR INTELIGENTE
Proyecto Atlas 2.0
========================================
*/

const Buscador = {

    buscar(texto){

        return{

            consulta:texto,

            resultados:[],

            mejorUnidad:null,

            precioMedio:0,

            precioImportacion:0,

            mejorGestoria:null,

            mejorTransporte:null,

            indiceMontero:0,

            recomendacion:null

        };

    }

};
