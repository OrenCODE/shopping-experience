import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/Product";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiBase}/product/products`);
  }

  getProductsByCategoryId(categoryId): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiBase}/product/productsByCategory/${categoryId}`);
  }

  searchProducts(name): Observable<any>{
    return this.http.get<any>(`${environment.apiBase}/product/search?name=${name}`)
  }

  editProduct(productId, editedProduct, token): Observable<Product>{
    return this.http.put<Product>(`${environment.apiBase}/product/editProductById/${productId}`, editedProduct, {headers: {Authorization: token}})
  }

  createNewProduct(newProduct, token): Observable<Product>{
    return this.http.post<Product>(`${environment.apiBase}/product/createNewProduct`, newProduct, {headers: {Authorization: token}})
  }

  getCheapProductsLength(): Observable<Number>{
    return this.http.get<Number>(`${environment.apiBase}/product/getCheapProducts`)
  }
}
