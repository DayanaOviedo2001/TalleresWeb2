import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alergia } from '../models/alergia.models';


@Injectable({
  providedIn: 'root'
})
export class AlergiaService {

  private baseURL = `http://localhost:3000/api`

  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<Alergia[] >(`${this.baseURL}/Alergias`)
  }
  postData(Alergia: Alergia): Observable<any> {
    return this.http.post<Alergia>(`${this.baseURL}/Alergias`, Alergia)
  }
  updateData(Alergia: Alergia): Observable<any> {
    return this.http.put<Alergia>(`${this.baseURL}/Alergias/${Alergia.id}`, Alergia)
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/Alergias/${id}`)
}
}