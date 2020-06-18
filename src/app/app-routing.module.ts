import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './utils/components/galeria/galeria.component';
import { BindingComponent } from './components/binding/binding.component';
import { EjemplosPipeComponent } from './components/ejemplos-pipe/ejemplos-pipe.component';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';
import { UsersMasterComponent } from './components/users-master/users-master.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

// localhost:4200/users/list

// routerOutlet de app.component.html => UsersCrudComponent
// routerOutlet de users-crud-component.html => UsersListComponent

const routes: Routes = [
  { path: '', redirectTo: '/form-reactive', pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'pipes', component: EjemplosPipeComponent },
  { path: 'users/list', component: UsersCrudComponent, canActivate: [AuthGuard] },
  // { path: 'users', component: UsersCrudComponent, children: [
  //   { path: 'list', component: UsersListComponent },
  //   { path: 'add', component: UsersAddComponent
  // ] },
  { path: 'users/master', component: UsersMasterComponent },
  { path: 'users/edit/:id', component: FormTemplateComponent, canDeactivate: [ConfirmGuard] },
  { path: 'observables', component: ObservablesComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  { path: '**', redirectTo: '/galeria', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
