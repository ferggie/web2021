import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/entities/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoComponent implements OnInit {
  listaEmpleados: Empleado[] | undefined;
  empleadoElegido: Empleado | undefined;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.empleadoSelect().subscribe(
      (res: any) => {
        console.log(res.data)
        this.listaEmpleados = res.data;
      }
    );

  }
  seleccionar(empleadoSeleccionado: Empleado){
    console.log(empleadoSeleccionado);
    this.empleadoElegido = empleadoSeleccionado;
  }
}
