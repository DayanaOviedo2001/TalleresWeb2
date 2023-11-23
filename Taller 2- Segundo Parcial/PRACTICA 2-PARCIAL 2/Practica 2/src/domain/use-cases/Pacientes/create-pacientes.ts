import { CreatePacienteDto } from '../../dtos';
import { PacienteEntity } from '../../entities/pacientes.entity';
import { PacienteRepository } from '../../repositories/pacientes.repository';


export interface CreatePacienteUseCase {
  execute( dto: CreatePacienteDto ): Promise<PacienteEntity>
}

// ctrl+ shift + l
export class CreateFuel implements CreatePacienteUseCase {
  
  constructor(
    private readonly repository: PacienteRepository,
  ) {}
  
  execute( dto: CreatePacienteDto ): Promise<PacienteEntity> {
    return this.repository.create(dto);
  }

}
