import { Component, inject, input, model } from '@angular/core';
import { Items } from '../../services/items.js';

@Component({
  selector: 'main-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
    id = input<number>(0);
    value = input<number>(0);

    itemsService;

    constructor() {
        this.itemsService = inject(Items);
    }

    updateChecked(id: number) {
        this.itemsService.updateChecked(id);
        console.log(this.itemsService.sum());
    }
}
