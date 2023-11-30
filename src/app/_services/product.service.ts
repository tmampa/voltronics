import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Product } from '@app/_models/product';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseUrl = 'https://fakestoreapi.com/products/category'
  getElectronics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/electronics`);
  }

  addProductToCart(products: Product) {
    console.log(products, "this product is available to be added")
    this.http.get<Product>(`${environment.apiUrl}/products`).subscribe(product => {
      
      if(product.id == products.id) {
        alert("Product has been added to cart");
        return this.http.post(`${environment.apiUrl}/products/${products}/${products.productCount}`, product.productCount + 1);
      }
      else {
        alert("This item is new to the cart")
        return this.http.post(`${environment.apiUrl}/products`, products);
      }
    });

     console.log("add to cart");
  }

  getProductByI(productId: number) {

  }
}
