//es el peso de una persona en kilogramos dividido entre el cuadrado de su altura
//imc = peso(kg)/altura*altura(metros)

/*
Composición corporal	Índice de masa corporal (IMC)
Peso inferior al normal	    Menos de 18.5
Normal	                    18.5 – 24.9
Peso superior al normal	    25.0 – 29.9
Obesidad	                Más de 30.0 
*/

function calcular(){
    console.log("calculando...")
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value ;
    let respuesta =document.querySelector("#respuesta");
console.log(peso, altura);

if(peso==""){
    respuesta.innerHTML = "Debe completar el campo peso";
} else if(altura==""){
    respuesta.innerHTML = "Debe completar el campo altura";
}
    else{
        let imc = peso / (altura * altura);
console.log(imc.toFixed(1));
if (imc < 18.5) {
    respuesta.innerHTML ="Peso inferior al normal";
  //console.log('Su IMC es: ' + imc + '');
} else if (imc >= 18.5 && imc <= 24.9) {
    respuesta.innerHTML ="Peso normal";
  //console.log('Su IMC es: ' + imc + 'Peso normal');
} else if (imc >= 25.0 && imc <= 29.9) {
    respuesta.innerHTML ="Peso superior al normal";
  //console.log('Su IMC es: ' + imc + 'Peso superior al  normal');
} else {
    respuesta.innerHTML ="Obesidad";
  //console.log('Su IMC es: ' + imc + 'Obesidad');
}
    }
}




