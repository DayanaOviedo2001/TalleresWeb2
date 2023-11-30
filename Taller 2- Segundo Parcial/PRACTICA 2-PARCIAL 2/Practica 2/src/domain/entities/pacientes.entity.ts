



export class PacienteEntity {

    constructor(
      public id: number,
      public nombre: string,
      public apellido: string,
      public cedula: number,
      public genero: string,
      public estado: string
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): PacienteEntity {
      const { id, nombre, apellido, cedula, genero, estado } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombre ) throw 'nombre is required';
      if ( !apellido ) throw 'apellido is required';
      if ( !cedula ) throw 'cedula is required';
      if ( !genero ) throw 'genero is required';
      if ( !estado ) throw 'estado is required';
      
  
        return new PacienteEntity(id, nombre, apellido, cedula, genero, estado)
    }
  
  }
  