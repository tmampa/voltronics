import {Component, OnInit} from '@angular/core';
import {Product} from "@app/_models/product";
import {ProductService} from "@app/_services";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    )
  }
}
