import { Component } from '@angular/core';
import { Item } from './item/item.js';

@Component({
  selector: 'app-main',
  imports: [Item],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
