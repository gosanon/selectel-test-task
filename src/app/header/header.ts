import { Component, inject } from '@angular/core';
import { Items } from '../services/items.js';


@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    itemsService;

    constructor() {
        this.itemsService = inject(Items);

        setInterval(() => console.log(JSON.stringify(this.itemsService.xsum(), null, 4)), 700);
        setInterval(() => console.log(JSON.stringify(this.itemsService.sum(), null, 4)), 700);
    }
}
