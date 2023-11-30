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
  baseUrl = 'https://fakestoreapi.com/products'
  getElectronics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/electronics`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getProductByI(productId: number) {

  }
}
