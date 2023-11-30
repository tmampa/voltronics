import {Component, OnInit} from '@angular/core';
import { ProductService } from '@app/_services';
import {Product} from "@app/_models/product";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  mens: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getMensClothing().subscribe(products => {
      this.mens = products;
    });
  }

}
