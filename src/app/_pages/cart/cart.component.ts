import {Component, OnInit} from '@angular/core';
import { CartService } from '@app/_services';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.cartContents;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
