import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartData1Service {
  private cartItems: any[] = [];

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable(); // This is what the component will subscribe to

  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => {
      const price = Number(item.price);
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
  }
}