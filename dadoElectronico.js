/*
    * * * * * * * * * * * * * * * * * * * * *
    *  2. D A D O   E L E C T R Ó N I C O   *
    * * * * * * * * * * * * * * * * * * * * *
     
    Simula el uso de un dado electrónico cuyos valores al azar irán del 1 al 6. 
    
        - Crea una variable "totalScore" en la que se irá almacenando la puntuación total
         tras cada una de las tiradas. 

        - Una vez alcanzados los 50 puntos el programa se detendrá y se mostrará 
        un mensaje que indique el fin de la partida.

        - Debes mostrar por pantalla los distintos valores que nos devuelva el dado
         (números del 1 al 6) así como el valor de la
          variable "totalScore" tras cada una de las tiradas. 

*/

function dicesGame(threshold) {
    let totalScore = []
    let throws = 1
    for (let accum = 0; accum <= threshold; throws++) {
        let randomNumber = (Math.round(Math.random() * (6 - 1) + 1))
        accum += randomNumber
        totalScore.push({ "Lanzamiento nº": throws, "Puntuación": randomNumber, "Puntuación total": accum })
    }
    console.log(`***************** FIN DE LA PARTIDA *******************`)
    console.log(`Has logrado alcanzar los ${threshold} puntos tras ${throws - 1} lanzamientos`)
    console.log(totalScore)
}

dicesGame(50)