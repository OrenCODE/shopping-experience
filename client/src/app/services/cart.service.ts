import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";

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
    return this.http.post<Cart>(`http://localhost:4000/api/cart/createCart` , userId ,{headers: {Authorization: token }})
  }

  checkIfUserHasCart(userId, token): Observable<Cart>{
    return this.http.get<Cart>(`http://localhost:4000/api/cart/checkIfUserHasCart/${userId}`, {headers: {Authorization: token }})
  }

  getCartByUserId(userId, token): Observable<Cart>{
    return this.http.get<Cart>(`http://localhost:4000/api/cart/getCartsByUserId/${userId}`, {headers: {Authorization: token }})
  }


}
