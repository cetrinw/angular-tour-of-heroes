import {Component, NgModule, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})

export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  title = '守望先锋';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}





