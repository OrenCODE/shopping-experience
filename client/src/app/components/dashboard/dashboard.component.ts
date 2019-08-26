import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: String;
  userToken: String;
  userCartStatus: Number;

  numOfProducts: Number;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private cartService: CartService
              ) { }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;

    this.cartService.checkIfUserHasCart(this.userId, this.userToken).subscribe(data => {
      console.log(data);
      if(data.status === 0){
        console.log(data);
        this.userCartStatus = 0;
        return;
      }
      if(data.status === 1){
        console.log(data);
        this.userCartStatus = 1;
        return;
      } else {
        const userId = {userId: this.userId};
        this.cartService.createNewCart(userId ,this.userToken).subscribe(data => {
          console.log(data);
        })
      }

    });

    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
    })
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
