import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  id: String;
  token: any;
  // isValid: Boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  //   this.authService.loadUserPayload();
  //   this.authService.loadToken();
  //   this.id = this.authService.currentUserData.id;
  //   this.token = this.authService.currentUserToken;
  //
  //   this.authService.checkIfAdmin(this.id , this.token).subscribe(data => {
  //
  //   },err => {
  //     if(err.status === 400){
  //       this.router.navigate(['dashboard']);
  //     }
  //   })
  }

}
