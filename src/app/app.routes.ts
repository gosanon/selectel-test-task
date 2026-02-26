import { Routes } from '@angular/router';
import { Greeting } from './greeting/greeting';
import { Main } from './main/main.js';


export const routes: Routes = [
    { path: '', redirectTo: 'greeting' },
    { path: 'greeting', component: Greeting },
    { path: 'main', component: Main }
];
