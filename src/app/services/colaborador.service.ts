import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }

  colaboradorSelect(){
    const ruta = "https://reqres.in/api/users?page=1"
    return this.http.get(ruta);
  }


  
}
