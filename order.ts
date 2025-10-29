import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.html',
  styleUrls: ['./order.css']
})
export class Order {
  productList: string[] = [
    'Matte Lipstick',
    'Vitamin C Serum',
    'Waterproof Mascara',
    'Aloe Vera Gel',
    'Compact Powder',
    'Eyeshadow Palette',
    'Kajal Eyeliner',
    'Herbal Face Wash',
    'Organic Sunscreen'
  ];

  order = {
    productName: '',
    quantity: 1,
    customerName: '',
    address: ''
  };

  submitted = false;

  placeOrder() {
    this.submitted = true;
    console.log('Order placed:', this.order);
  }
}
