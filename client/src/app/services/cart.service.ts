import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";
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
export class CartService {

  constructor(private http: HttpClient) { }

  createNewCart(userId, token): Observable<Cart>{
    return this.http.post<Cart>(
      `${environment.apiBase}/cart/createCart`,
      userId,{headers: {Authorization: token }})
  }

  getUserCartStatus(userId, token): Observable<any>{
    return this.http.get<any>(
      `${environment.apiBase}/cart/getUserCartStatus/${userId}`,
      {headers: {Authorization: token }})
  }

  updateCartStatus(cartId, cartStatus, token): Observable<Cart>{
    return this.http.put<Cart>(
      `${environment.apiBase}/cart/updateCartStatus/${cartId}`,
      cartStatus ,{headers: {Authorization: token }})
  }

  addProductToCart(cartId, product, token): Observable<Product>{
    return this.http.put<Product>(
      `${environment.apiBase}/cart/addProductToCart/${cartId}`,
      product,{headers: {Authorization: token }})
  }

  deleteProductFromCart(cartId, productId, token): Observable<any>{
    return this.http.put<any>(
      `${environment.apiBase}/cart/deleteProductFromCart/${cartId}`,
      productId ,{headers: {Authorization: token }})
  }

  deleteAllProductsFromCart(cartId, token): Observable<Cart>{
    return this.http.put<Cart>(
      `${environment.apiBase}/cart/deleteAllProducts/${cartId}`,
      {}, {headers: {Authorization: token }})
  }

  setCartTotalPrice(cartId, totalCartPrice, token): Observable<Cart>{
    return this.http.put<Cart>(
      `${environment.apiBase}/cart/setCartTotalPrice/${cartId}`,
      totalCartPrice ,{headers: {Authorization: token }})
  }

}
