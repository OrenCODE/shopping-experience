import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

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
      `api/cart/createCart`,
      userId,{headers: {Authorization: token }})
  }

  getUserCartStatus(userId, token): Observable<any>{
    return this.http.get<any>(
      `api/cart/getUserCartStatus/${userId}`,
      {headers: {Authorization: token }})
  }

  updateCartStatus(cartId, cartStatus, token): Observable<Cart>{
    return this.http.put<Cart>(
      `api/cart/updateCartStatus/${cartId}`,
      cartStatus ,{headers: {Authorization: token }})
  }

  addProductToCart(cartId, product, token): Observable<Product>{
    return this.http.put<Product>(
      `api/cart/addProductToCart/${cartId}`,
      product,{headers: {Authorization: token }})
  }

  deleteProductFromCart(cartId, productId, token): Observable<any>{
    return this.http.put<any>(
      `api/cart/deleteProductFromCart/${cartId}`,
      productId ,{headers: {Authorization: token }})
  }

  deleteAllProductsFromCart(cartId, token): Observable<Cart>{
    return this.http.put<Cart>(
      `api/cart/deleteAllProducts/${cartId}`,
      {}, {headers: {Authorization: token }})
  }

  setCartTotalPrice(cartId, totalCartPrice, token): Observable<Cart>{
    return this.http.put<Cart>(
      `api/cart/setCartTotalPrice/${cartId}`,
      totalCartPrice ,{headers: {Authorization: token }})
  }

}
