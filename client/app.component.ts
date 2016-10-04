import { Component } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: "app",
    template: ` 
                <a routerLink="/dash">Dashboard</a>
                <a routerLink="/heroes">HEROES</a>
                <router-outlet></router-outlet>`
})
export class AppComponent {

}
