import { Component, inject } from '@angular/core';
import { ItemsService } from '../services/items.service.js';


@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    itemsService = inject(ItemsService);
}
