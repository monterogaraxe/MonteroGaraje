/*
========================================
MOTOR ATLAS
BUSCADOR INTELIGENTE
Proyecto Atlas 3.0
========================================
*/

const Buscador = {

    buscar(texto){

        texto = texto.toLowerCase().trim();

        let respuesta = {

            consulta: texto,

            marca: "",

            modelo: "",

            generacion: "",

            version: "",

            categoria: "",

            tipoBusqueda: "",

            resultados: [],

            mensaje: ""

        };

        // BMW

        if(texto.includes("m3")){

            respuesta.marca="BMW";
            respuesta.modelo="M3";
            respuesta.tipoBusqueda="modelo";
            respuesta.mensaje="Selecciona la generación del BMW M3.";

            return respuesta;

        }

        // GOLF

        if(texto.includes("golf")){

            respuesta.marca="Volkswagen";
            respuesta.modelo="Golf";
            respuesta.tipoBusqueda="modelo";
            respuesta.mensaje="Selecciona la versión del Golf.";

            return respuesta;

        }

        // RS3

        if(texto.includes("rs3")){

            respuesta.marca="Audi";
            respuesta.modelo="RS3";
            respuesta.tipoBusqueda="modelo";
            respuesta.mensaje="Selecciona la generación del Audi RS3.";

            return respuesta;

        }

        // POR DEFECTO

        respuesta.tipoBusqueda="libre";
        respuesta.mensaje="Buscando en toda Europa...";

        return respuesta;

    }

};
