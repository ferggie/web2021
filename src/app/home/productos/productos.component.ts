import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categorias';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() categoriaX: Categoria;
  listaProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    //console.log(this.categoriaX);
  }

  ngOnChanges(): void{
    console.log(this.categoriaX);
    const id = this.categoriaX.id;
    this.productosService.productosSelect(id.toString()).subscribe(
      (res: Producto[]) => {
        console.log(res)
        this.listaProductos = res;
      } 
    );
  }

}