import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  color: string;

  defaultColor = 'yellow';

  @Input()
  duration: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.innerHTML = 'Otro texto';
  }

  ngOnInit() {
    if (this.color !== null) {
      this.defaultColor = this.color;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color || this.defaultColor;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
