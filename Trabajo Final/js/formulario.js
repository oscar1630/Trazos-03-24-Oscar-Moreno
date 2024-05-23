function enviar (){
    console.log("dentro...")
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#edad");
    let asunto = document.querySelector("#contacto");
    let servicios = document.querySelector("#servicios");
    let mensaje= document.querySelector("#mensaje");
    let politica= document.querySelector("#politica");
    let respuesta=document.querySelector("#respuesta")
    console.log(nombre,apellido,edad,asunto,servicios,mensaje,politica);

    nombre.classList.remove("rojo")
    apellido.classList.remove("rojo")
    edad.classList.remove("rojo")
    contacto.classList.remove("rojo")
    servicios.classList.remove("rojo")
    mensaje.classList.remove("rojo")
    politica.classList.remove("rojo")

    document.querySelector("#nombre + p").innerHTML = "";
    document.querySelector("#apellido + p").innerHTML ="";
    document.querySelector("#edad + p").innerHTML ="";
    document.querySelector("#contacto + p").innerHTML ="";
    document.querySelector("#servicios + p").innerHTML ="";
    document.querySelector("#mensaje + p").innerHTML ="";
    document.querySelector("#politica ~ p").innerHTML ="";


    let cNombre = true;
    let cApellido = true;
    let cEdad = true; 
    let cContacto = true;
    let cServicios = true;
    let cMensaje = true;
    let cPolitica = true;

    let patron = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(nombre.value ==""){
        document.querySelector("#nombre + p").innerHTML = "Debe rellenar el campo nombre"
        nombre.classList.add("rojo")
        cNombre = false;
    }
     if(apellido.value ==""){
        document.querySelector("#apellido + p").innerHTML = "Debe rellenar el campo apellido"
        apellido.classList.add("rojo")
        cApellido = false;
    }
     if(email.value ==""){
        document.querySelector("#edad + p").innerHTML ="Debe rellenar el campo edad"
        email.classList.add("rojo")
         cEmail = false; 
    }
     if(asunto.value ==""){
        document.querySelector("#contacto + p").innerHTML = "Debe rellenar el campo contacto"
        asunto.classList.add("rojo")
         cAsunto = false;
    }
     if(!politica.checked){
        document.querySelector("#politica ~ p").innerHTML = "Debe aceptar la politica de privacidad"
        politica.classList.add("rojo")
        cPolitica = false;
    }
    else{
        if(cNombre && cApellido && cEdad && cContacto &&cPolitica ){
        respuesta.innerHTML = "formulario enviado"
        document.querySelector("#formulario").submit()
    }
    }


}
