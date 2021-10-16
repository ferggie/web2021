import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  empleadoSelect() { 
    const ruta = "https://reqres.in/api/users?page=1&per_page=12"
    return this.http.get(ruta);
  }
}
