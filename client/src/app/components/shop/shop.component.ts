import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CategoryService} from "../../services/category.service";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

import {Category} from "../../models/Category";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // showFiller: boolean = false;
  categories: Category[];
  productsByCategory: Product[];
  currentCartProducts: Product[];

  userId: String;
  userToken: String;

  constructor(private authService: AuthService,
              private categoryService: CategoryService,
              private productService: ProductService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;

    this.cartService.checkIfUserHasCart(this.userId, this.userToken).subscribe(data => {
      this.currentCartProducts = data.cart.products;
    });

    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  filterProductsByCategory(categoryId) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.productsByCategory = data
    })
  }
}
