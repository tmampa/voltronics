import {Component, OnInit} from '@angular/core';
import { CartService } from '@app/_services';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(protected cartService: CartService) {
  }

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.cartContents;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.loadCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCartItems();

  }

}
