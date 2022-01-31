// Inicializamos libreria AOS que da efecto Scroll
AOS.init();

// Animacion NAV
let desplazamientoActual
let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", function () {     
    desplazamientoActual = window.pageYOffset
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    } else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = window.pageYOffset;
})

// Menú
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    } else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos");
})

// Animacion de preloader
window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2")
})

