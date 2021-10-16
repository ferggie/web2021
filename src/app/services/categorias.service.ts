import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  

  categoriasSelect() { 
    const ruta = "https://test-store.aldairrev.pe/categorie";
    /* const ruta = "https://26e1-190-235-35-87.ngrok.io/categorie";*/
    return this.http.get(ruta);
  }

  categoriasInsert(name: string, description: string, color: string ) { 
    const ruta = "https://test-store.aldairrev.pe/categorie";
    /*const ruta = "https://26e1-190-235-35-87.ngrok.io/categorie";*/

    const formData: FormData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("color", color);


    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res;
        
      })
    );
  }

}





