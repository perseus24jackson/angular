import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { Cart } from './cart/cart';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Product, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EXP-6-Services';
}