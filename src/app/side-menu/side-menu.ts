import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesService } from '../services/routes.service';


@Component({
    selector: 'app-side-menu',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './side-menu.html',
    styleUrl: './side-menu.css',
})
export class SideMenu {
    routesService = inject(RoutesService);
    slugs = Object.keys(this.routesService.items) as Array<keyof typeof this.routesService.items>
}
