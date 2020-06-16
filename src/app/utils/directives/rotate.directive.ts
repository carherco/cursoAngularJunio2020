import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements OnInit {

  @Input('appRotate') initialDegrees;
  @Input() step = 10;

  currentDegrees = 0;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.initialDegrees) {
      this.currentDegrees += +this.initialDegrees;
    }
    this.setRotation(this.currentDegrees);
  }

  setRotation(degrees: number) {
    this.el.nativeElement.style.transform = 'rotate(' + degrees + 'deg)';
  }

  @HostListener('click', ['$event'])
  onMouseClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.currentDegrees -= this.step;
    } else {
      this.currentDegrees += +this.step;
    }
    this.setRotation(this.currentDegrees);
  }
}
