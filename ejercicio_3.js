/*
* * * * * * * * * * * * * * * * * * * * * * *
*  3. ASINCRONIA                            *
* * * * * * * * * * * * * * * * * * * * * * *

Se proporcionan 3 archivos  csv separados por comas y se deberÃ¡n bajar asÃ­ncronamente () 

A la salida se juntarÃ¡n los registros de los 3 archivos en un array que serÃ¡ el parÃ¡metro
de entrada de la funcion findIPbyName(array, name ,surname) que buscarÃ¡ una entrada en el array
volverÃ¡ la IP correspondiente

Una vez hallada la IP ha de mostrarse por pantalla para llamar a la funciÃ³n utilizad

el nombre Cari Wederell
*/


const axios = require('axios');

function findIPbyName(array, name ,surname) {
}

function findIPbyName(array, name ,surname) {
    let counter = 0;
    const IP =2;
  
    for (let line of array) {
      const fieldsOfLine = line.split(';')

      if (fieldsOfLine.length === 1) {
        continue;
      }




      const get2017 = axios.get('https://MOCK_DATA1.csv');
      const get2018 = axios.get('https://MOCK_DATA2.csv');
      const get2019 = axios.get('https://MOCK_DATA2.csv');
      
      Promise.all([ archivo1, archivo2, archivo3 ])
       
  

