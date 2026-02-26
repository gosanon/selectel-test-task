import { Component, computed, inject, input, model, signal } from '@angular/core';
import { Item } from './item/item.js';
import { ItemsService } from '../services/items.service.js';

@Component({
  selector: 'app-main',
  imports: [Item],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
    itemsService = inject(ItemsService);
}
