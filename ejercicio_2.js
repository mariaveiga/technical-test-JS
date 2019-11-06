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

var x=1;
var y=0;
 
function totalScore(){
 
	var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
 
	var d1=  Math.floor(Math.random()*6)+1
 
 
 
	var pos =d1 + y;
    die1 = d1;
    status = "Tu puntuacion es "+ pos +".";
    tiro = "Tu numero de tiro es "+x+".";
 
    x = x+1;
    y = pos;
    if (pos > 10000){
    	alert("El juego ha finalizado");
    	y = 0;
 
    }
 
}

console.log(totalScore);