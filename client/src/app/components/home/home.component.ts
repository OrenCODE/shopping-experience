import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numOfProducts: Number;
  numOfOrders: Number;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
    });
    this.orderService.getAllOrders().subscribe(data => {
      this.numOfOrders = data.length;
    })
  }

}
