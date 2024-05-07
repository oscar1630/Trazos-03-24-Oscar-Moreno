function enviar (){
    console.log("dentro...")
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let asunto = document.querySelector("#asunto");
    let servicios = document.querySelector("#servicios");
    let mensaje= document.querySelector("#mensaje");
    let politica= document.querySelector("#politica");
    let respuesta=document.querySelector("#respuesta")
    console.log(nombre,apellido,email,asunto,servicios,mensaje,politica);

    nombre.classList.remove("rojo")
    apellido.classList.remove("rojo")
    email.classList.remove("rojo")
    asunto.classList.remove("rojo")
    servicios.classList.remove("rojo")
    mensaje.classList.remove("rojo")
    politica.classList.remove("rojo")


    if(nombre.value ==""){
        respuesta.innerHTML = "Debe rellenar el campo nombre"
        nombre.classList.add("rojo")
    }
     if(apellido.value ==""){
        respuesta.innerHTML = "Debe rellenar el campo apellido"
        apellido.classList.add("rojo")
    }
     if(email.value ==""){
        respuesta.innerHTML ="Debe rellenar el campo email"
        email.classList.add("rojo")
    }
     if(asunto.value ==""){
        respuesta.innerHTML = "Debe rellenar el campo asunto"
        asunto.classList.add("rojo")
    }
     if(servicios.value ==""){
        respuesta.innerHTML = "Debe rellenar el campo servicios"
        servicios.classList.add("rojo")
    }
     if(mensaje.value ==""){
        respuesta.innerHTML = "Debe rellenar el campo mensaje"
        mensaje.classList.add("rojo")
    }
     if(!politica.checked){
        respuesta.innerHTML = "Debe aceptar la politica de privacidad"
        politica.classList.add("rojo")
    }
    else{
        respuesta.innerHTML = "formulario enviado"
        document.querySelector("#formulario").submit()
    }


}
