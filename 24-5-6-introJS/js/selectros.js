//funcion
function saludar(){
    console.log("hola")
}

//selectores clasicos
console.log(document.getElementById("titulo"))
let titulo_h1 = document.getElementById("titulo");
titulo_h1.innerText = "Este texto lo pongo js";

//clases
titulo_h1.setAttribute("class", "rojo")
titulo_h1.className="azul"
//metodo nuevo
titulo_h1.classList.add("blanco")
//seleccion por etiqueta
console.log(document.getElementsByTagName("div"))
let contenido= document.getElementsByTagName("div")[0]
contenido.classList.add("rojo")
let segundo_col6 =document.getElementsByTagName("div")[2]
segundo_col6.classList.add("azul")

//seleccion por clase
document.getElementsByClassName("contenido")[0].className = "rosa contenido"

//selectores nuevos

document.querySelector("#titulo").className = "rosa";
let parrafos = document.querySelectorAll("section > p")[0];
console.log(parrafos)
