import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseUrl = 'https://fakestoreapi.com/products/category'
  getElectronics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/electronics`);
  }
}
