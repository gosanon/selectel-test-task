import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideMenuService } from '../services/side-menu.service';


@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
    sideMenuService = inject(SideMenuService);
    slugs = Object.keys(this.sideMenuService.items) as Array<keyof typeof this.sideMenuService.items>
}
