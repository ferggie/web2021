import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/entities/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {
  listaColaborador: Colaborador[] | undefined;


  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradorService.colaboradorSelect().subscribe(
      (res: any) => {
        console.log(res.data)
        this.listaColaborador = res.data;
      }
    );
  }

}
