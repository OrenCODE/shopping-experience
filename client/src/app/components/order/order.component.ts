import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {Product} from "../../models/Product";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form = new FormGroup({
    city: new FormControl(),
    street: new FormControl(),
    shippingDate: new FormControl(),
    creditCard: new FormControl()
  });

  isLoading: boolean = true;
  userId: String;
  userToken: String;
  cartId: String;

  currentCartProducts: Product[];
  productsForCart: Record<string, Product>;
  totalPrice: Number;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private cartService: CartService
  ) { }

  ngOnInit() {
    this.authService.loadUserCart();
    this.authService.loadToken();
    this.userToken = this.authService.currentUserToken;

    this.getAllProducts();

    this.currentCartProducts = this.authService.userCart.products;
    this.totalPrice = this.authService.userCart.totalCartPrice;


  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.convertArrToObject(data);
      this.isLoading = false
    });
  }

  convertArrToObject(productsArray) {
    const productsObj = {};
    for (let i = 0; i < productsArray.length; i++) {
      productsObj[productsArray[i]._id] = productsArray[i]
    }
    this.productsForCart = productsObj;
  }
}
