import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { ROUTING } from './app.routing';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        ROUTING
    ],
    declarations: [ AppComponent,
                    DashboardComponent,
                    HeroesComponent,
                    HeroDetailComponent
                ],
    providers: [ HeroService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
