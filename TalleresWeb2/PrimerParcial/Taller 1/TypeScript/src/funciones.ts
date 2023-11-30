import { Doctor, doctores } from './datos';

// Función para mostrar doctores con forEach
function mostrarDoctoresConForEach(doctores: Doctor[]) {
  console.log("Mostrando doctores con forEach:");
  doctores.forEach(doctor => {
    console.log(doctor);
  });
}
  
// Función para recorrer y mostrar elementos del arreglo usando for...in
function mostrarDoctoresConForIn(arreglo: Doctor[]) {
  console.log("\nRecorriendo con for...in:");
  for (let key in arreglo) {
    console.log(arreglo[key]);
  }
}



// Función para recorrer y mostrar elementos del arreglo usando for...of
function mostrarDoctoresConForof(arreglo: Doctor[]) {
  console.log("\nRecorriendo con for...of:");
  for (let element of arreglo) {
    console.log(element);
  }
}


// Define una función para buscar un doctor por su ID
function buscarDoctorPorID(id: string, callback: (error: string | null, doctor: Doctor | null) => void) {
  for (const doctor of doctores) {
    if (doctor.ID === id) {
      callback(null, doctor); // Llama al callback con el doctor encontrado
      return;
    }
  }
  callback('Doctor no encontrado', null); // Llama al callback con un error si no se encuentra
}

// Define una función de callback para mostrar el doctor por consola
function mostrarDoctorPorConsola(err: string | null, doctor: Doctor | null) {
  if (err) {
    console.error(err);
  } else {
    console.log('Doctor encontrado:');
    console.log(doctor);
  }
}


  mostrarDoctoresConForEach(doctores),
  mostrarDoctoresConForIn(doctores),
  mostrarDoctoresConForof(doctores),
  buscarDoctorPorID('D002', mostrarDoctorPorConsola);

