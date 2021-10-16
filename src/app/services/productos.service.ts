import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  productosSelect(idcategoria: string) { 
    const ruta = "https://test-store.aldairrev.pe/getproductbyid";


    const formData: FormData = new FormData();
    formData.append("id", idcategoria);

    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
