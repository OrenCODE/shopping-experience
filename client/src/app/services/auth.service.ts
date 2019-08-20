import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Credentials } from "../models/Credentials";
import { User } from "../models/User";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string;
  loggedUser: User;

  constructor(private http: HttpClient) { }

  checkUserCredentials(userCredentials): Observable<Credentials>{
    return this.http.post<Credentials>('http://localhost:4000/api/user/registerCheck', userCredentials, httpOptions);
  }

  registerUser(user): Observable<User>{
    return this.http.post<User>('http://localhost:4000/api/user/register', user , httpOptions);
  }

  loginUser(loginDetails): Observable<Credentials>{
    return this.http.post<Credentials>('http://localhost:4000/api/user/login', loginDetails , httpOptions)
  }

  storeUserData(token, loggedUser){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(loggedUser));
    this.authToken = token;
    this.loggedUser = loggedUser
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  isUserLoggedIn = () => {
    let jwtHelper = new JwtHelperService();
    if(localStorage.id_token == undefined)
      return false;
    return !jwtHelper.isTokenExpired(localStorage.id_token);
  };

  logoutUser(){
    this.authToken = null;
    this.loggedUser = null;
    localStorage.clear()
  }
}
