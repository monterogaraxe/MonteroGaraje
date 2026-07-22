const Anuncios = {

    iniciar() {

        document.querySelectorAll(".featured .card button").forEach(boton => {

            boton.addEventListener("click", () => {

                const texto = boton.parentElement.querySelector("h3").textContent;

                document.getElementById("busqueda").value = texto;

                buscarCoche();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            });

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {
    Anuncios.iniciar();
});
