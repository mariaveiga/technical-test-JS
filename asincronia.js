/*-----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------
    * * * * * * * * * * * * * * * * * * * * * * *
    *  3. ASINCRONIA                            *
    * * * * * * * * * * * * * * * * * * * * * * *
    En este ejercicio se comprobará la competencia de los alumnos en el concepto de asincronía 
    Se proporcionan 3 archivos  csv separados por comas y se deberán bajar asÃncronamente (promises) 
    A la salida se juntarán los registros de los 3 archivos en un array que será el parámetro de entrada 
    de la funcion findIPbyName(array, name ,surname) que buscará una entrada en el array y devolverá la IP correspondiente
    Una vez hallada la IP ha de mostrarse por pantalla
    para llamar a la función utilizad el nombre Cari Wederell
    -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------
*/


const fs = require('fs');
const getMock1 = fs.readFileSync(`./files/MOCK_DATA1.csv`, 'latin1')
const getMock2 = fs.readFileSync(`./files/MOCK_DATA2.csv`, 'latin1')
const getMock3 = fs.readFileSync(`./files/MOCK_DATA3.csv`, 'latin1')
const name = "Cari"
const surname = "Wederell"

function findIPbyName(array, name, surname) {
  let match;
  for (i = 0; i < array.length; i++) {
    nameOnArray = array[i]
    surnameOnArray = array[i + 1]
    ipOnArray = array[i + 4]
    if (nameOnArray.toLowerCase() == name.toLowerCase() &&
      surnameOnArray.toLowerCase() == surname.toLowerCase()) {
      match = true
      console.log(`La IP de ${nameOnArray} ${surnameOnArray} es: ${ipOnArray}`)
    }
  }
  if (!match) {
    console.log("La persona buscada no se encuentra en el directorio")
  }
}


Promise.all([getMock1, getMock2, getMock3])
  .then((result) => {
     const joinedMocks = getMock1.toString().concat(getMock2.toString()).concat(getMock3.toString())
     findIPbyName(joinedMocks.toString().split(/\n|,/), name, surname)
         
  })
  .catch(error => {
     console.log("Ha ocurrido un error durante la descarga de datos");
  })
  

