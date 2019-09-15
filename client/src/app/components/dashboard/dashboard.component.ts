import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";
import { OrderService } from "../../services/order.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: Boolean = true;
  continueShopButton = false;

  userId: String;
  userToken: String;

  numOfProducts: Number;
  dashboardMessage: String;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private cartService: CartService,
              private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;

    this.cartService.checkIfUserHasCart(this.userId, this.userToken).subscribe(data => {
      // IF cart has been initialized
      if (data.status === 0) {
        this.orderService.checkIfUserHasOrder(this.userId, this.userToken).subscribe(data => {
          if(data[0]){
            this.dashboardMessage = "Welcome back, no cart found. Last order from: " + (new DatePipe('en').transform(data[0].orderDate, 'dd/MM/yyyy'));
          }else{
            this.dashboardMessage = 'welcome to your first shopping experience';
          }
        });
        this.authService.storeCartData(data.cart);
        return;
      }
      // IF the user cart has products init
      if (data.status === 1) {
        this.dashboardMessage = data.msg;
        this.continueShopButton = true;
        this.authService.storeCartData(data.cart);
        return;

        // IF the user is new
      } else {
        this.dashboardMessage = 'welcome to your first shopping experience';

        const userId = {userId: this.userId};
        this.cartService.createNewCart(userId, this.userToken).subscribe(data => {
          this.authService.storeCartData(data.cart);
        });
      }
    });
   this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    });
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
