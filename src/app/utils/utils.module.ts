import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { RotateDirective } from './directives/rotate.directive';
import { ExpPipe } from './pipes/exp.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    HighlightDirective,
    RotateDirective,
    ExpPipe,
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    RotateDirective,
    ExpPipe,
    GaleriaComponent
  ]
})
export class UtilsModule { }
