import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { HistoriaComponent } from './home/historia/historia.component';
import { ColaboradorComponent } from './home/colaborador/colaborador.component';
import { EmpleadoComponent } from './home/empleados/empleados.component';
import { TiendaComponent } from './home/tienda/tienda.component';
import { CategoriasComponent } from './tabla/categorias/categorias.component';




const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'colaborador', component: ColaboradorComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'tablacategorias', component: CategoriasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
