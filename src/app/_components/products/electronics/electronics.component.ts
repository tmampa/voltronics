import {Component, OnInit} from '@angular/core';
import { ProductService } from "@app/_services";
import { Product } from "@app/_models/product";

@Component({
  selector: 'electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getElectronics().subscribe((data: Product[])=>{
      console.log(data)
      this.products = data;
    })
  }

}
