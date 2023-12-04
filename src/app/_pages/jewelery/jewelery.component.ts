import {Component, OnInit} from '@angular/core';
import {Product} from "@app/_models/product";
import {ProductService} from "@app/_services";

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {
  jewelery: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getJewelery().subscribe((data: Product[]) => {
      this.jewelery = data;
    });
  }

}
