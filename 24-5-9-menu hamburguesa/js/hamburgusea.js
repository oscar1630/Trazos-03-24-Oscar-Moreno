
document.querySelector(".cruz").classList.add("ocultar")


if(window.innerWidth <= 767){
    //document.querySelectorAll("nav")[0].classList.toggle("salir")
    console.log("<=767")
    document.querySelector("desplegable").addEventListener("click", function()
{
    document.querySelectorAll("nav")[0].classList.toggle("salir")
    document.querySelector(".cruz").classList.toggle("ocultar")
    document.querySelector(".barra").classList.toggle("ocultar")
})
}
else if(window.innerWidth >= 768 && window.innerWidth <= 1200  ){
    console.log(">=768 <=1200")
    document.querySelector(".cruz").classList.add("ocultar")
    document.querySelector(".barra").classList.add("ocultar")
    //evento de scroll
    window.addEventListener("scroll", function(){
        document.querySelectorAll("header")[0].classList.toggle("header-fijo", window.scrollY > 0)
    })
}
else{
    console.log(">1200")
    document.querySelector("#desplegable").addEventListener("click", function()
{
    document.querySelectorAll("header")[0].classList.toggle("header-lateral")
    document.querySelector(".cruz").classList.toggle("ocultar")
    document.querySelector(".barra").classList.toggle("ocultar")
})
}