// En el archivo paciente.model.ts
export interface Paciente {
    id?: string;
    nombre: string;
    apellido: string;
    cedula: string;
    genero: string;
    estado: string;
    alergiaId?: number;
  }
  