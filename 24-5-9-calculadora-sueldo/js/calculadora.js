function calcular(){
    //console.log("calculando...")
    let bruto = document.querySelector("#bruto").value
    let hijos = document.querySelector("#hijos").value
    let contrato = document.querySelector("#contrato").value
    let pagas = document.querySelector("#pagas").value
    console.log(bruto, hijos, contrato, pagas)

    if(bruto == ""){
        document.querySelector("#error").innerHTML = "Debe rellenar el campo sueldo bruto anual" 
    } else if(hijos == ""){
        document.querySelector("#error").innerHTML = "Debe rellenar el campo nº de hijos"
    }else if(contrato == ""){
        document.querySelector("#error").innerHTML = "Debe rellenar el campo tipo de contrato"
    }else if(pagas == ""){
        document.querySelector("#error").innerHTML = "Debe rellenar el campo nº de pagas"
    }
    else{
        let netoHijos;
        let brutoMhijos
        document.querySelector("#error").innerHTML = ""
        if(hijos == "0"){
             netoHijos = bruto*0.85
        }else if(hijos == "1-2"){
            netoHijos = bruto*0.90
        }else{
            netoHijos = bruto*0.95
        }
        console.log("Neto hijos"+netoHijos)
        brutoMhijos = bruto - netoHijos
        console.log("Neto menos hijos"+brutoMhijos)

        let netoContrato
        let brutoMcontrato
        if(contrato == "indefinido"){
            netoContrato = bruto*0.85
        }else if(contrato == "temporal"){
            netoContrato = bruto*0.90
        }
        console.log("Neto contrato"+netoContrato)
        brutoMcontrato = bruto - netoContrato
        console.log("Neto menos contrato"+brutoMcontrato)

        let brutoMhijosMensual = brutoMhijos / pagas
        console.log("retencion hijos mensual: " +brutoMhijosMensual.toFixed(2))

        let brutoMcontratoMensual = brutoMcontrato / pagas
        console.log("retencion contrato mensual: "+brutoMcontratoMensual.toFixed(2))

        let neto =( bruto - (brutoMhijos + brutoMcontrato)) /pagas
        console.log("Sueldo neto: "+neto.toFixed(2) )

        document.querySelector("#nPagas").innerHTML = pagas+"€";
        document.querySelector("#rHijos").innerHTML= brutoMhijosMensual+"€";
        document.querySelector("#rContrato").innerHTML = brutoMcontratoMensual+"€";
        document.querySelector("#rSueldo").innerHTML = neto.toFixed(2)+"€";
    }
}