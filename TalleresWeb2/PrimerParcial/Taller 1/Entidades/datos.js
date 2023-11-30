// Definir objeto Doctor
const Doctor = {
    ID: '',
    Nombre: '',
    Especialidad: '',
    Horario: '',
  };
  
  // Crear arreglos que almacenan objetos de doctores
  const doctores = [
    {
      ID: 'D001',
      Nombre: 'Dr. John Smith',
      Especialidad: 'Medicina Interna',
      Horario: 'Lunes a Viernes, 9:00 AM - 5:00 PM',
    },
    {
      ID: 'D002',
      Nombre: 'Dra. Emily Johnson',
      Especialidad: 'Neurología',
      Horario: 'Lunes a Miércoles, 10:00 AM - 6:00 PM',
    },
    {
      ID: 'D003',
      Nombre: 'Dr. Michael Anderson',
      Especialidad: 'Ortopedia',
      Horario: 'Martes y Jueves, 8:00 AM - 4:00 PM',
    },
    {
      ID: 'D004',
      Nombre: 'Dra. Maria Martinez',
      Especialidad: 'Pediatría',
      Horario: 'Lunes y Viernes, 8:30 AM - 3:30 PM',
    },
    {
      ID: 'D005',
      Nombre: 'Dr. Juan Garcia',
      Especialidad: 'Cardiología',
      Horario: 'Miércoles y Viernes, 9:30 AM - 5:30 PM',
    },
  ];
  
  module.exports = {
    Doctor,
    doctores
  };
  