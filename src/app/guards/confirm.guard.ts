import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormTemplateComponent } from '../components/form-template/form-template.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<FormTemplateComponent> {

  canDeactivate(
    component: FormTemplateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (component.hasUnsavedChanges()) {
        return window.confirm('You have unsaved changes. Are you sure you want to exit?');
      }
      return true;
  }

}
