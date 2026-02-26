import { Component, computed, inject, input, model, signal } from '@angular/core';
import { Item } from './item/item.js';
import { Items } from '../services/items.js';

@Component({
  selector: 'app-main',
  imports: [Item],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
    items = signal<{ id: number, value: number, checked: boolean }[]>([]);
    itemsService;

    constructor() {
        this.itemsService = inject(Items);
        this.items.set(this.itemsService.items());
    }
}
