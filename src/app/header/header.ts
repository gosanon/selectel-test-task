import { Component, inject } from '@angular/core';
import { Items } from '../services/items.js';


@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    itemsService = inject(Items);
}
