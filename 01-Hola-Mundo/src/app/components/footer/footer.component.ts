import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  anio: number;
  nombre: string;
  apellido: string;

  constructor() {
    this.anio = new Date().getFullYear();
    this.nombre = 'Víctor Manuel';
    this.apellido = 'Gómez';

  }

}
