import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/Order";
import {environment} from "../../environments/environment";

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
    return this.http.get<Order[]>(`${environment.apiBase}/order/orders`,{headers: {Authorization: token }});
  }

  getOrdersLength(): Observable<Number> {
    return this.http.get<Number>(`${environment.apiBase}/order/ordersLength`);
  }

  createNewOrder(order, token): Observable<any> {
    return this.http.post<any>(`${environment.apiBase}/order/createNewOrder`, order, {headers: {Authorization: token }});
  }

  getFullyBookedDates(token): Observable<any> {
    return this.http.get<any>(`${environment.apiBase}/order/getFullyBookedDates`,{headers: {Authorization: token }});
  }

  checkIfUserHasOrder(userId, token): Observable<any> {
    return this.http.get<any>(`${environment.apiBase}/order/getLatestOrderByUserId/${userId}`,{headers: {Authorization: token }});
  }
}
