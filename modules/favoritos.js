/*
========================================
FAVORITOS
Proyecto Atlas
MonteroGaraje
========================================
*/

const Favoritos = {

    obtener(){

        return JSON.parse(localStorage.getItem("favoritos")) || [];

    },

    guardar(lista){

        localStorage.setItem("favoritos", JSON.stringify(lista));

    },

    existe(id){

        const lista = this.obtener();

        return lista.includes(id);

    },

    agregar(id){

        let lista = this.obtener();

        if(!lista.includes(id)){

            lista.push(id);

            this.guardar(lista);

        }

    },

    eliminar(id){

        let lista = this.obtener();

        lista = lista.filter(item => item !== id);

        this.guardar(lista);

    },

    cambiar(id){

        if(this.existe(id)){

            this.eliminar(id);

        }else{

            this.agregar(id);

        }

    }

};
