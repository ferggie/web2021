import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/entities/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias: Categoria[] |undefined;
  nuevaCategoria: Categoria;

  categoriasAgregarForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    color: new FormControl(),

  });

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.categoriasSelect().subscribe(
      (res: Categoria[]) => {
        console.log(res)
        this.listaCategorias = res;
      } 
    );
  }

  agregarCategoria(values){
    console.log(values);
    this.categoriasService.categoriasInsert(values.name, values.description, values.color).subscribe(
      (res: any) => {
        console.log(res)
        this.nuevaCategoria = {
          id: parseInt(res.id),
          name: values.name,
          description: values.description,
          color: values.color,

        }
        this.listaCategorias.push(this.nuevaCategoria);
        this.categoriasAgregarForm.reset();

      },
      error => console.log('oops', error)
    );
  }

}