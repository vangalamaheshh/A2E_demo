import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    template:  `<div *ngFor="let hero of heroes" (click)="onSelect(hero)">
                    <h2>{{hero.id}} {{hero.name}}</h2>
                    <button (click)="delete(hero); $event.stopPropagation();">X</button>
                </div>   
                <div *ngIf="selectedHero">
                    <h2>{{ selectedHero.name | uppercase }}</h2>
                    <button (click)="goToDetail()">View Details</button>
                </div>
                <div>
                    <label>Hero name: </label> <input #heroName />
                    <button (click)="addHero(heroName.value); heroName.value = ''">Add</button>
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

    addHero(heroName: string):void {
        var name = heroName.trim();
        if( ! name ) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.selectedHero = null;
                this.heroes.push(hero);
                this.router.navigate(['/heroes']);
            });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero)
            .then(hero_obj => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if(this.selectedHero === hero) { this.selectedHero = null; }
            });
    }
} 
