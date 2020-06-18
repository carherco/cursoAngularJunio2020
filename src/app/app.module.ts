import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PieComponent } from './components/pie/pie.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EjemplosPipeComponent } from './components/ejemplos-pipe/ejemplos-pipe.component';
import { UtilsModule } from './utils/utils.module';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UsersMasterComponent } from './components/users-master/users-master.component';
import { UsersDetalleComponent } from './components/users-detalle/users-detalle.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    CabeceraComponent,
    BindingComponent,
    EjemplosPipeComponent,
    UsersCrudComponent,
    FilterPipe,
    UsersMasterComponent,
    UsersDetalleComponent,
    FormTemplateComponent,
    ObservablesComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
