import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PieComponent } from './components/pie/pie.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { EjemplosPipeComponent } from './components/ejemplos-pipe/ejemplos-pipe.component';
import { UtilsModule } from './utils/utils.module';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    CabeceraComponent,
    BindingComponent,
    EjemplosPipeComponent,
    UsersCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
