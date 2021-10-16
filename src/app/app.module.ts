import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { HistoriaComponent } from './home/historia/historia.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { ColaboradorComponent } from './home/colaborador/colaborador.component';
import { EmpleadoComponent } from './home/empleados/empleados.component';
import { TiendaComponent } from './home/tienda/tienda.component';
import { ProductosComponent } from './home/productos/productos.component';
import { CategoriasComponent } from './tabla/categorias/categorias.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainNavComponent,
    NosotrosComponent,
    HistoriaComponent,
    CarouselComponent,
    InicioComponent,
    ColaboradorComponent,
    EmpleadoComponent,
    TiendaComponent,
    ProductosComponent,
    CategoriasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
