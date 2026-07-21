/*
========================================
MOTOR ATLAS
BUSCADOR INTELIGENTE 2.0
========================================
*/

const Buscador = {

    buscar(texto){

        texto = texto.toLowerCase().trim();

        let encontrados = [];

        for(let marca in CATALOGO){

            for(let modelo in CATALOGO[marca]){

                if(
                    texto.includes(marca.toLowerCase()) ||
                    texto.includes(modelo.toLowerCase())
                ){

                    encontrados.push({

                        marca: marca,

                        modelo: modelo,

                        generaciones: CATALOGO[marca][modelo].generaciones,

                        versiones: CATALOGO[marca][modelo].versiones

                    });

                }

            }

        }

        return encontrados;

    }

};
