import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'dash',
    template: `<h1>{{title}}</h1>
                <div *ngFor="let hero of heroes" (click)="goToDetail(hero)">
                    <h2>Name: {{hero.name}}</h2>
                </div>`
})
export class DashboardComponent implements OnInit {
    title: string = "Tour of Heroes";
    heroes: Hero[];

    constructor(private heroService: HeroService,
                private router: Router) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,2));
    }

    goToDetail(hero: Hero) { 
        let link = [ '/detail', hero.id ];
        this.router.navigate(link);
    }
}
