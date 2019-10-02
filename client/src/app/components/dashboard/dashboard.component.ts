import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";
import { OrderService } from "../../services/order.service";
import { DatePipe } from "@angular/common";
import { User } from "../../models/User";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading: Boolean = true;
  continueShopButton = false;

  user: User;
  userId: String;
  userToken: String;
  messageStatus: Number;

  numOfProducts: Number;
  numOfOrders: Number;
  numOfCheapProducts: Number;
  dashboardMessage: String;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private cartService: CartService,
              private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.getUserAuthDetails();
    this.getUserCartStatus();
    this.getAllProducts();
    this.getAllOrders();
    this.getAllCheapProducts();
  }

  getUserAuthDetails(){
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.user = this.authService.currentUserData;
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;
  }

  getUserCartStatus(){
    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
      // IF cart has been initialized
      if (data.status === 0) {
        this.orderService.checkIfUserHasOrder(this.userId, this.userToken).subscribe(data => {
          if(data[0]){
            this.dashboardMessage = "Your Last Order From: " + (new DatePipe('en').transform(data[0].orderDate, 'dd/MM/yyyy'));
            this.messageStatus = 2;
          }else{
            this.dashboardMessage = 'Click Below To Start Your First FOODJAM Experience';
            this.messageStatus = 0;
          }
        });
        this.authService.storeCartData(data.cart);
        return;
      }
      // IF the user cart has products init
      if (data.status === 1) {
        this.dashboardMessage = data.msg;
        this.messageStatus = 1;

        this.continueShopButton = true;
        this.authService.storeCartData(data.cart);
        return;

        // IF the user is new
      } else {
        this.dashboardMessage = 'Click Below To Start Your First FOODJAM Experience';
        this.messageStatus = 0;

        const userId = {userId: this.userId};
        this.cartService.createNewCart(userId, this.userToken).subscribe(data => {
          this.authService.storeCartData(data.cart);
        });
      }
    });
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
        this.isLoading = false;
    });
  }

  getAllOrders(){
    this.orderService.getOrdersLength().subscribe(data => {
      this.numOfOrders = data;
    });
  }

  getAllCheapProducts(){
    this.productService.getCheapProductsLength().subscribe(data => {
      console.log(data);
      this.numOfCheapProducts = data;
    })
  }

  capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
