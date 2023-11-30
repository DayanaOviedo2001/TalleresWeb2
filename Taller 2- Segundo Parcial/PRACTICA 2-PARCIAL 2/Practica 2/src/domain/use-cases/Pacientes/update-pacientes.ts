import { UpdatePacienteDto } from '../../dtos';
import { PacienteEntity } from '../../entities/pacientes.entity';
import { PacienteRepository } from '../../repositories/pacientes.repository';


export interface UpdatePacienteUseCase {
  execute( dto: UpdatePacienteDto ): Promise<PacienteEntity>
}


export class UpdatePaciente implements UpdatePacienteUseCase {
  
  constructor(
    private readonly repository: PacienteRepository,
  ) {}
  
  execute( dto: UpdatePacienteDto ): Promise<PacienteEntity> {
    return this.repository.updateById(dto);
  }

}