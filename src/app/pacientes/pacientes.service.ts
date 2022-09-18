import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getPacientes } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private api: string = "/stock-nutrinatalia";

  constructor(private http: HttpClient){}

  getPacientes(): Observable<getPacientes> {
    return this.http.get<getPacientes>('https://equipoyosh.com/stock-nutrinatalia/persona');
  }

}