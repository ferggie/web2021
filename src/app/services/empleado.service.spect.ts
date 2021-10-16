import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  empleadosSelect() { 
    const ruta = "https://reqres.in/api/users?page=2"
    return this.http.get(ruta);
  }
}
