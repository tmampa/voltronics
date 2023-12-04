import {Component, OnInit} from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { ProductService } from "@app/_services";
import {Product} from "@app/_models/product";

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  user: User | null;
  images: Product[] | undefined;

  constructor(private accountService: AccountService, private productService: ProductService) {
    this.user = this.accountService.userValue;
  }

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe(
        (data: Product[]) => {
            this.images = data;
        }
        )
    }
}
