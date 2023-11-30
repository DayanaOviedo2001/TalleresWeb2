import { PacienteEntity } from '../../entities/pacientes.entity';
import { PacienteRepository } from '../../repositories/pacientes.repository';


export interface GetPacientessUseCase {
  execute(): Promise<PacienteEntity[]>
}


export class GetPacientess implements GetPacientessUseCase {
  
  constructor(
    private readonly repository: PacienteRepository,
  ) {}
  
  execute(): Promise<PacienteEntity[]> {
    return this.repository.getAll();
  }

}
