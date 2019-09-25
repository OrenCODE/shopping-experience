import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { OrderService } from "../../services/order.service";
import { Product } from "../../models/Product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];
  numOfProducts: Number;
  numOfOrders: Number;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.numOfProducts = data.length;
      this.products = data
    });
    this.orderService.getAllOrders().subscribe(data => {
      this.numOfOrders = data.length;
    })
  }

}
