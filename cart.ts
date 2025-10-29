import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartData1Service } from '../cart-data';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartData1: CartData1Service) {}

  ngOnInit() {
    this.cartData1.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartData1.getTotal(); // re-calculate total on change
    });
  }

  removeItem(index: number) {
    this.cartData1.removeItem(index); // triggers update automatically
  }
}