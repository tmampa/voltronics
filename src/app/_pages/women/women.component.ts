import {Component, OnInit} from '@angular/core';
import { ProductService } from '@app/_services';
import {Product} from "@app/_models/product";;

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  women: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getWomensClothing().subscribe((data: any) => {
      this.women = data;
    });
  }

}
