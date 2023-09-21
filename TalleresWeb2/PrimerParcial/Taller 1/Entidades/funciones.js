const { doctores } = require('./datos.js');


// Función para recorrer y mostrar doctores con forEach
function mostrarDoctoresConForEach(doctores) {
    console.log("Mostrando doctores con forEach:");
    doctores.forEach(doctor => {
      console.log(doctor);
    });
  }

  // Función para recorrer y mostrar elementos del arreglo usando for...in
  function recorrerConForIn(doctores) {
    console.log("\nRecorriendo con for...in:");
    for (let key in doctores) {
      console.log(doctores[key]);
    }
  }

    // Función para recorrer y mostrar elementos del arreglo usando for...of
    function recorrerConForOf(doctores) {
        console.log("\nRecorriendo con for...of:");
        for (let element of doctores) {
          console.log(element);
        }
      }
  
// Define una función para buscar un doctor por su ID
function buscarDoctorPorID(id, callback) {
    for (const doctor of doctores) {
      if (doctor.ID === id) {
        callback(null, doctor); // Llama al callback con el doctor encontrado
        return;
      }
    }
    callback('Doctor no encontrado', null); // Llama al callback con un error si no se encuentra
  }
  
  // Define una función de callback para mostrar el doctor por consola
  function mostrarDoctorPorConsola(err, doctor) {
    if (err) {
      console.error(err);
    } else {
      console.log('Doctor encontrado:');
      console.log(doctor);
    }
  }


  mostrarDoctoresConForEach(doctores);
  recorrerConForIn(doctores);
  recorrerConForOf(doctores);
  buscarDoctorPorID('D002', mostrarDoctorPorConsola);
