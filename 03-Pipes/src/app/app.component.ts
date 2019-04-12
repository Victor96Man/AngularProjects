import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Víctor M';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Spider-Man',
    bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \'sentido arácnido\', que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
    img: 'assets/img/spiderman.png',
    aparicion: '1962-08-01',
    casa: 'Marvel'
  };

  valorDePromesa = new Promise(( resolve, reject) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

  nombre2 = 'víctor m gÓmez muÑoz';

  video = 'https://www.youtube.com/embed/atCqWQkkgGM';

  activar = true;
}
