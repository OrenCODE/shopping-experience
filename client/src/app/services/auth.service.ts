import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Credentials } from "../models/Credentials";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userCredentials: any;

  constructor(private http: HttpClient) { }

  checkUserCredentials(userCredentials): Observable<Credentials>{
    return this.http.post<Credentials>('http://localhost:4000/api/user/registerCheck', userCredentials, httpOptions);
  }
}
