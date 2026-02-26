import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header.js';
import { SideMenu } from './side-menu/side-menu.js';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, Header, SideMenu],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {

}
