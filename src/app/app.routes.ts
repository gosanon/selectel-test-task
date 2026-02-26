import { Routes } from '@angular/router';
import { Greeting } from './greeting/greeting';
import { Main } from './main/main.js';


export const routes: Routes = [
    { path: '', redirectTo: 'greeting', pathMatch: 'full' },
    { path: 'greeting', component: Greeting },
    { path: 'main', component: Main }
];
