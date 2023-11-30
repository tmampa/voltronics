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
    return this.http.get(`${this.baseUrl}/category/electronics`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getJewelery(): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/jewelery`);
  }

  getMensClothing(): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/men's clothing`);
  }
}
