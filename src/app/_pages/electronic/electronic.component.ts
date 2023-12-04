import {Component, OnInit} from '@angular/core';
import { Product } from "@app/_models/product";
import  { ProductService } from "@app/_services";

@Component({
  selector: 'electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  electronics: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    return this.productService.getElectronics().subscribe((data: Product[]) => {
      this.electronics = data;
    })
  }
}
