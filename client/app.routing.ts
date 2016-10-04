import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const APP_ROUTES: Routes = [{
    path: 'heroes',
    component: HeroesComponent
}, {
    path: 'dash',
    component: DashboardComponent
}, {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
},{
    path: 'detail/:id',
    component: HeroDetailComponent
}];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
