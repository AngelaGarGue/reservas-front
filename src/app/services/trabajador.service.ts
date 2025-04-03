import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private apiUrl = 'http://localhost:8080/trabajadores';

  constructor(private http: HttpClient) {}

  listar(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(this.apiUrl);
  }

  crear(trabajador: Trabajador): Observable<any> {
    return this.http.post(this.apiUrl, trabajador);
  }
}
