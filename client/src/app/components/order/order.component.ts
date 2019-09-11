import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router"

import { Product } from "../../models/Product";
import { City } from "../../models/City";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isLoading: boolean = true;
  userId: String;
  userToken: String;
  cartId: String;

  orderForm: FormGroup;

  currentCartProducts: Product[];
  productsForCart: Record<string, Product>;
  fullyBookedDates: any = [];
  totalPrice: Number;

  public searchValue: string;

  cities: City[] = [
    {value: 'Tel-Aviv-0', viewValue: 'Tel Aviv'}, {value: 'Jerusalem-1', viewValue: 'Jerusalem'},
    {value: 'Haifa-2', viewValue: 'Haifa'}, {value: 'Beer Sheva-3', viewValue: 'Beer Sheva'},
    {value: 'Natenya-4', viewValue: 'Netanya'}, {value: 'Rishon-Le-Zion-5', viewValue: 'Rishon Le Zion'},
    {value: 'Rehovot-6', viewValue: 'Rehovot'}, {value: 'Eilat-7', viewValue: 'Eilat'},
    {value: 'Kfar-Saba-8', viewValue: 'Kfar Saba'}, {value: 'Kiryat-Shmona-9', viewValue: 'Kiryat Shmona'},
  ];

  constructor(private authService: AuthService,
              private productService: ProductService,
              private orderService: OrderService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.authService.loadUserCart();
    this.authService.loadToken();
    this.userToken = this.authService.currentUserToken;
    this.userId = this.authService.userCart.userId;
    this.cartId = this.authService.userCart._id;

    this.getAllProducts();
    this.getFullyBookedDates();

    this.currentCartProducts = this.authService.userCart.products;
    this.totalPrice = this.authService.userCart.totalCartPrice;

    this.orderForm = new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      deliveryDate: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required)
    });
  }

  onOrderSubmit() {
    const orderDetails = this.orderForm.getRawValue();

    const creditCard = orderDetails.creditCard;
    const deliveryDate = new DatePipe('en').transform(orderDetails.deliveryDate, 'yyyy/MM/dd');
    const products = this.authService.userCart.products;

    console.log(creditCard, deliveryDate, products);

    const order = {
      userId: this.userId,
      cartId: this.cartId,
      totalPrice: this.totalPrice,
      city: orderDetails.city,
      street: orderDetails.street,
      deliveryDate: deliveryDate,
      creditCard: creditCard,
      products: products
    };
    console.log(order);
    this.orderService.createNewOrder(order, this.userToken).subscribe(data => {
      if (data.success) {
        this.router.navigate(['dashboard'])
      }
    }, err => {
      if (err.status === 400) {
        Object.keys(err.error).forEach(prop => {
          const formControl = this.orderForm.get(prop);
          if (formControl) {
            // activate the error messages
            formControl.setErrors({
              serverError: err.error[prop]
            });
          }
        });
      }
    });
    console.log(orderDetails);
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

  setUserAddress() {
    this.authService.loadUserPayload();
    this.orderForm.controls['city'].setValue(this.authService.currentUserData.city);
    this.orderForm.controls['street'].setValue(this.authService.currentUserData.street);
  }

  getFullyBookedDates() {
    this.orderService.getFullyBookedDates(this.userToken).subscribe(data => {
      this.fullyBookedDates = data.map(obj => new Date(obj.date).getTime());
    })
  }

  myFilter = (d: Date): boolean => {
    const day: any = d.getDay();
    return (!this.fullyBookedDates.includes(d.valueOf()));
  };

  dateClass = (d: Date) => {
    const day: any = d.getDay();
    return (this.fullyBookedDates.includes(d.valueOf())) ? 'example-custom-date-class' : undefined;

  };
}
