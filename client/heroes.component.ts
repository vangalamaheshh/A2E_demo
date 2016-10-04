import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    template:  `<div *ngFor="let hero of heroes" (click)="onSelect(hero)">
                    <h2>{{hero.id}} {{hero.name}}</h2>
                </div>   
                <div *ngIf="selectedHero">
                    <h2>{{ selectedHero.name | uppercase }}</h2>
                    <button (click)="goToDetail()">View Details</button>
                </div>
                `,
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    title: string = "Tour of Heroes";
    selectedHero: Hero;

    constructor(private heroService: HeroService,
                private router: Router) {}

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes );
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    goToDetail(): void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
} 
