import { Component, OnInit } from '@angular/core';
import { crudService } from "../../services/crud.service";
import { AlergiaService } from "../../services/alergias.service";
import { Paciente } from "../../models/paciente.model";
import { Alergia } from "../../models/alergia.models";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  datos: Paciente[] = [];
  alergias: Alergia[] = [];
  PacienteForm: FormGroup;
  UpdatePacienteForm: FormGroup;
  doctorSeleccionado: any = null;
  buscarTexto: string = '';

  constructor(
    private servicioBackend: crudService,
    private alergiaService: AlergiaService,
    private formbuilder: FormBuilder
  ) {
    this.PacienteForm = this.formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      genero: ['', Validators.required],
      estado: ['', Validators.required],
      alergiaId: [null, Validators.required],
    });

    this.UpdatePacienteForm = this.formbuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      genero: ['', Validators.required],
      estado: ['', Validators.required],
      alergiaId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.ObtenerDatos();
    this.ObtenerAlergias();
  }

  ObtenerDatos() {
    this.servicioBackend.getAllData().subscribe(datos => {
      this.datos = datos;
    });
  }

  ObtenerAlergias() {
    this.alergiaService.getAllData().subscribe(alergias => {
      this.alergias = alergias;
    });
  }

  AgregarDatos() {
    if (this.PacienteForm.valid) {
      // Obtener los datos del formulario
      let paciente = this.PacienteForm.value;
  
      // Convertir alergiaId a número si existe
      paciente = {
        ...paciente,
        alergiaId: paciente.alergiaId ? parseInt(paciente.alergiaId, 10) : null
      };
  
      // Enviar la solicitud al backend
      this.servicioBackend.postData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.PacienteForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }
  

  EliminarDatos(id: any) {
    this.servicioBackend.deleteData(id).subscribe(response => {
      console.log('Cita médica eliminada exitosamente:', response);
      this.ObtenerDatos();
    });
  }

  UpdateDatos() {
    if (this.UpdatePacienteForm.valid) {
      const paciente = this.UpdatePacienteForm.value;
      this.servicioBackend.updateData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.UpdatePacienteForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }

  ObtenerDatosE(datoO: Paciente) {
    this.doctorSeleccionado = datoO;
    console.log(this.doctorSeleccionado.id);
    this.UpdatePacienteForm.patchValue(datoO);
  }
}
