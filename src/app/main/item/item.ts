import { Component, inject, input, model } from '@angular/core';
import { ItemsService } from '../../services/items.service.js';

@Component({
  selector: 'main-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
    id = input.required<number>();
    value = input.required<number>();

    itemsService = inject(ItemsService);

    updateChecked(id: number) {
        this.itemsService.updateChecked(id);
    }
}
