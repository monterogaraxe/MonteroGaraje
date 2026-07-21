/*
========================================
MONTERO AI
VERSIÓN 1.0
========================================
*/

const MonteroAI = {

    analizar(coche){

        let informe = {

            indice: 0,

            nivel: "",

            recomendacion: "",

            color: ""

        };

        if(coche.indice >= 95){

            informe.indice = coche.indice;
            informe.nivel = "Excelente";
            informe.recomendacion = "Compra muy recomendable.";
            informe.color = "verde";

        }

        else if(coche.indice >= 90){

            informe.indice = coche.indice;
            informe.nivel = "Muy buena";
            informe.recomendacion = "Muy buena oportunidad.";
            informe.color = "azul";

        }

        else if(coche.indice >= 80){

            informe.indice = coche.indice;
            informe.nivel = "Buena";
            informe.recomendacion = "Revisar historial antes de comprar.";
            informe.color = "amarillo";

        }

        else{

            informe.indice = coche.indice;
            informe.nivel = "Riesgo";
            informe.recomendacion = "No recomendable.";
            informe.color = "rojo";

        }

        return informe;

    }

};
