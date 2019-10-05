import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numOfProducts: Number;
  numOfOrders: Number;

  slides: any = [[]];
  chunk = (arr, chunkSize) => {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  constructor(private authService: AuthService,
              private productService: ProductService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
      this.slides = this.chunk(data, 3);
    });
    this.orderService.getOrdersLength().subscribe(data => {
      this.numOfOrders = data;
    });
  }

}
