import { Component, inject, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.js';
import { SideMenu } from './side-menu/side-menu.js';
import { ItemsService } from './services/items.service.js';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, SideMenu],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {

}
