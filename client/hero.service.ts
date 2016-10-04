import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get('/heroes')
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        return this.http.post( '/hero', JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    handleError(error: any): Promise<any> {
        console.log("Error");
        return Promise.reject(error.message || error);
    }
}
