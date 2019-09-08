import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { Product } from "../../models/Product";
import { City } from "../../models/City";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form = new FormGroup({
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    shippingDate: new FormControl('', Validators.required),
    creditCard: new FormControl('', Validators.required)
  });

  isLoading: boolean = true;
  userId: String;
  userToken: String;
  cartId: String;

  currentCartProducts: Product[];
  productsForCart: Record<string, Product>;
  totalPrice: Number;

  cities: City[] = [
    {value: 'Tel-Aviv-0', viewValue: 'Tel Aviv'}, {value: 'Jerusalem-1', viewValue: 'Jerusalem'},
    {value: 'Haifa-2', viewValue: 'Haifa'}, {value: 'Beer Sheva-3', viewValue: 'Beer Sheva'},
    {value: 'Natenya-4', viewValue: 'Netanya'}, {value: 'Rishon-Le-Zion-5', viewValue: 'Rishon Le Zion'},
    {value: 'Rehovot-6', viewValue: 'Rehovot'}, {value: 'Eilat-7', viewValue: 'Eilat'},
    {value: 'Kfar-Saba-8', viewValue: 'Kfar Saba'}, {value: 'Kiryat-Shmona-9', viewValue: 'Kiryat Shmona'},
  ];

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

  setUserAddress(){
    this.authService.loadUserPayload();
    this.form.controls['city'].setValue(this.authService.currentUserData.city);
    this.form.controls['street'].setValue(this.authService.currentUserData.street);
  }
}
