import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/Order";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAllOrders(token): Observable<Order[]> {
    return this.http.get<Order[]>('api/order/orders',{headers: {Authorization: token }});
  }

  getOrdersLength(): Observable<Number> {
    return this.http.get<Number>('api/order/ordersLength');
  }

  createNewOrder(order, token): Observable<any> {
    return this.http.post<any>('api/order/createNewOrder', order, {headers: {Authorization: token }});
  }

  getFullyBookedDates(token): Observable<any> {
    return this.http.get<any>('api/order/getFullyBookedDates',{headers: {Authorization: token }});
  }

  checkIfUserHasOrder(userId, token): Observable<any> {
    return this.http.get<any>(`api/order/getLatestOrderByUserId/${userId}`,{headers: {Authorization: token }});
  }
}
