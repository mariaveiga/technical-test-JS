/*

    * * * * * * * * * * * * * * * *
    *  1. C A L C U L A D O R A   *
    * * * * * * * * * * * * * * * *
    
    Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones. 

        - El programa debe recibir dos números (n1, n2).

        - Debe existir una variable que permita seleccionar de alguna forma el tipo de operación
         (suma, resta, multiplicación o división).

*/


let n1 = 6.8;
let n2 = 8.2;
let resultado = [];


n1=parseFloat("Introduce el primer numero");
n2=parseFloat("Introduce el segundo numero");
n3=parseFloat("Introduce un signo");

if (n3=="+") {
    resultado=n1+n2;
} 

if(n3=="-") {
    if (n1>n2){
        resultado=n1-n2;
    } else {
        resultado=n2-n1;
    } 
}

if (n3 =="*"){
    resultado=n1*n2;
}

if (n3=="/"){
    if (n1>n2){
        resultado=n1/n2;
    } else {
        resultado=n2/n1;
    }
}

console.log(resultado);