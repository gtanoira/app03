import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNegrita]'
})
export class NegritaDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.fontWeight = 'bolder';
  }

}
