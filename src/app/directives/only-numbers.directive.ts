import { Directive, ElementRef, } from '@angular/core';

/* *************************************************************************************
 * Directive: Allow Only Numbers
 *
 * Usage inside form (HTML):
 *    <input appOnlyNumbers type='text'>
*/
@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(
    public el: ElementRef
  ) {

    console.log('*** EL:', this.el);
    this.el.nativeElement.onkeypress =
      evt => {
        if ((evt.which < 45 || evt.which > 57) && evt.which !== 47) {
          evt.preventDefault();
        } else {
          // Revisar que haya solo una coma decimal
          const auxValor = this.el.nativeElement.value;
          if ((evt.which === 46) && (this.el.nativeElement.value.indexOf('.') !== -1)) {
            evt.preventDefault();
          }
          // Revisar que el simbolo - (negativo) esté solo al principio
          if ((evt.which === 45) && (this.el.nativeElement.value.length !== 0)) {
            evt.preventDefault();
          }
        }
      };

  }

}
