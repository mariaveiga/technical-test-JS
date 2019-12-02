/*

    * * * * * * * * * * * * * * * *
    *  1. C A L C U L A D O R A   *
    * * * * * * * * * * * * * * * *
    
    Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones. 

        - El programa debe recibir dos números (n1, n2).

        - Debe existir una variable que permita seleccionar de alguna forma el tipo de operación
         (suma, resta, multiplicación o división).

*/

const operacion = "elevar" //esta operación puede ser los siguientes valores: sumar, restar, multiplicar, dividir o elevar
const n1 = 6;
const n2 = 9;
calculator(n1, n2, operacion)

function calculator(num1, num2, operator) {
    let resutl = "Error";

    if (operator == "sumar") {
        result = `${num1} + ${num2} = ${num1 + num2}`
    }

    if (operator == "restar") {
        result = `${num1} - ${num2} = ${num1 - num2}`
    }

    if (operator == "multiplicar") {
        result = `${num1} * ${num2} = ${num1 * num2}`
    }

    if (operator == "dividir") {
        result = `${num1} / ${num2} = ${num1 / num2}`
    }

    if (operator == "elevar") {
        result = `${num1} ^ ${num2} = ${Math.pow(num1, num2)}`
    }

    console.log(result)

}