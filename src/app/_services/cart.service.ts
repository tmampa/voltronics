import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  get cartContents() {
    return this.cartItems;
  }

  addToCart(product: any) {
    const foundItem = this.cartItems.find(item => item.id === product.id);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateLocalStorage();
  }

  removeFromCart(product: any) {
    const foundItem = this.cartItems.find(item => item.id === product.id);
    if (foundItem) {
      foundItem.quantity--;
      if (foundItem.quantity === 0) {
        this.cartItems = this.cartItems.filter(item => item.id !== product.id);
      }
    }
    this.updateLocalStorage();
  }

  clearCart() {
    this.cartItems = [];
    this.updateLocalStorage();
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getItemCount() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
