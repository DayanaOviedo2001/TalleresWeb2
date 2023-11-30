import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';


@Injectable({
  providedIn: 'root'
})
export class crudService {

  private baseURL = `http://localhost:3000/api`

  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<Paciente[] >(`${this.baseURL}/Pacientes`)
  }
  postData(paciente: Paciente): Observable<any> {
    return this.http.post<Paciente>(`${this.baseURL}/Pacientes`, paciente)
  }
  updateData(paciente: Paciente): Observable<any> {
    return this.http.put<Paciente>(`${this.baseURL}/Pacientes/${paciente.id}`, paciente)
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/Pacientes/${id}`)
}
}