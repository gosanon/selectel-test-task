import { Component, inject, input, model } from '@angular/core';
import { Items } from '../../services/items.js';

@Component({
  selector: 'main-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
    id = input.required<number>();
    value = input.required<number>();

    itemsService = inject(Items);

    updateChecked(id: number) {
        this.itemsService.updateChecked(id);
    }
}
