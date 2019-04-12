import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
    });
  }
  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
