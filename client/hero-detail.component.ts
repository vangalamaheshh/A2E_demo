import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    template:  `<div *ngIf="hero">
                    <h2>{{hero.name}} Details</h2>
                    ID: {{hero.id}}
                    Name: <input [(ngModel)]="hero.name"/>
                    <button (click)="goBack()">Back</button>
                </div>`
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    
    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }
}
