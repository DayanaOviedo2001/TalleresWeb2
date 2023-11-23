import { PacienteEntity } from '../../entities/pacientes.entity';
import { PacienteRepository } from '../../repositories/pacientes.repository';


export interface DeletePacienteUseCase {
  execute( id: number ): Promise<PacienteEntity>
}

export class DeleteFuel implements DeletePacienteUseCase {
  
  constructor(
    private readonly repository: PacienteRepository,
  ) {}
  
  execute( id: number ): Promise<PacienteEntity> {
    return this.repository.deleteById(id);
  }

}