function calcularDescontos(){
    var salario = parseFloat(document.getElementById("salario").value);
    var inss = calcularInss(salario);
    var irrf = calcularIrrf(salario);
    var totalDescontos = inss + irrf;
    var salarioLiquido = salario - totalDescontos;
 
    console.log("Salário: " + salario);
    console.log("Inss: " + inss.toFixed(2));
    console.log("irrf: " + irrf.toFixed(2))
    console.log("Total dos Descontos: "+totalDescontos.toFixed(2));
    console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
}

function calcularInss(salario){
    var aliquota;
    if(salario<=1302){
        aliquota = 0.075;
        return salario * aliquota;
    } else if(salario>=1302.01 && salario<=2571.29){
        aliquota = 0.09;
        return salario * aliquota;
    } else if(salario>=2571.30 && salario<=3856.94){
        aliquota = 0.12;
        return salario * aliquota;
    } else if(salario>=3856.95 && salario<=7507.49){
        aliquota = 0.14;
        return salario * aliquota;
    } 
    else{
        aliquota = 1051.04;
        return aliquota
    }
}

function calcularIrrf(salario){
    var aliquotaIr;
    if(salario<=1903.98){
        aliquotaIr = 0;
        return salario * aliquotaIr;
    } else if(salario>=1903.99  && salario<=2826.65){
        aliquotaIr = 0.075;
        return(salario * aliquotaIr) - 142.80 ;
    } else if(salario>=2826.66  && salario<=3751.05){
        aliquotaIr = 0.15;
        return (salario * aliquotaIr) - 354.80 ;
    } else if(salario>=3751.06  && salario<=4664.68){
        aliquotaIr = 0.14;
        return (salario * aliquotaIr) - 636.13 ;
    } 
    else{
        aliquotaIr = 0.275;
        return (salario * aliquotaIr) - 869.36;
    }
}