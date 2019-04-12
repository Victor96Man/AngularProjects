import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {

      // tslint:disable-next-line: no-string-literal
      this.heroe = this.heroeService.getHeroe(params['id']);

    });

  }

}
