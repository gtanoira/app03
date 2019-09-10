import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  @Input('data') regiones: string[];

  constructor() { }

  ngOnInit() {
    console.log('*** PAISES REGIONES: ', this.regiones);
    this.regiones.push('Europa');
    console.log('*** PAISES REGIONES: ', this.regiones);
  }

}
