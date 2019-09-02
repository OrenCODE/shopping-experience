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
      `http://localhost:4000/api/cart/createCart`,
      userId,{headers: {Authorization: token }})
  }

  checkIfUserHasCart(userId, token): Observable<Cart>{
    return this.http.get<Cart>(
      `http://localhost:4000/api/cart/checkIfUserHasCart/${userId}`,
      {headers: {Authorization: token }})
  }

  updateCartStatus(cartId, cartStatus, token): Observable<Cart>{
    return this.http.put<Cart>(
      `http://localhost:4000/api/cart/updateCartStatus/${cartId}`,
      cartStatus ,{headers: {Authorization: token }})
  }

  addProductToCart(cartId, product, token): Observable<Product>{
    return this.http.put<Product>(
      `http://localhost:4000/api/cart/addProductToCart/${cartId}`,
      product,{headers: {Authorization: token }})
  }

  deleteProductFromCart(cartId, productId, token): Observable<any>{
    return this.http.put<any>(
      `http://localhost:4000/api/cart/deleteProductFromCart/${cartId}`,
      productId ,{headers: {Authorization: token }})
  }

  deleteAllProductsFromCart(cartId, token): Observable<Cart>{
    return this.http.put<Cart>(
      `http://localhost:4000/api/cart/deleteAllProducts/${cartId}`,
      {}, {headers: {Authorization: token }})
  }

}
