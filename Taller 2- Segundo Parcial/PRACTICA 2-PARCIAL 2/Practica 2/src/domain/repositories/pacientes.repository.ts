import { CreatePacienteDto, UpdatePacienteDto } from '../dtos';
import { PacienteEntity } from '../entities/pacientes.entity';



export abstract class PacienteRepository {

  abstract create( createDoctorDto: CreatePacienteDto ): Promise<PacienteEntity>;

  abstract getAll(): Promise<PacienteEntity[]>;

  abstract findById( id: number ): Promise<PacienteEntity>;
  abstract updateById( updateFuelDto: UpdatePacienteDto ): Promise<PacienteEntity>;
  abstract deleteById( id: number ): Promise<PacienteEntity>;

}