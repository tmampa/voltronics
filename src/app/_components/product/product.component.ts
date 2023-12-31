import {Component, OnInit, Input} from '@angular/core';
import {Product} from "@app/_models/product";
import {ProductService} from "@app/_services";
import {CartService} from "@app/_services/cart.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products: Product[] = []

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    )
  }

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(this.cartService.cartContents);
  }
}
