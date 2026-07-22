/*
========================================
FICHA DEL VEHÍCULO
Proyecto Atlas
========================================
*/

const Ficha = {

    mostrar(coche){

        alert(
            coche.marca + " " +
            coche.modelo +
            "\n\nMotor: " + coche.motor +
            "\nPotencia: " + coche.potencia + " CV" +
            "\nPrecio: " + coche.precio.toLocaleString("es-ES") + " €"
        );

    }

};
