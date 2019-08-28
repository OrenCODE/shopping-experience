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
  products: Product[];
  currentCartProducts: Product[];

  productId: String;
  cartId: any;
  addMode: Boolean = false;

  public quantity: number;

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
    this.authService.loadUserCart();
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;
    this.cartId = this.authService.userCart._id;

    this.cartService.checkIfUserHasCart(this.userId, this.userToken).subscribe(data => {
      this.currentCartProducts = data.cart.products;
    });

    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });

    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  filterProductsByCategory(categoryId) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.productsByCategory = data
    })
  }

  addProductToCart(e) {
    e.preventDefault();
    console.log('check')
  }

  // changeView(productId) {
  //   this.productId = productId;
  //   this.addMode = true;
  // }

  addToCart(productId) {
    this.productId = productId;
    this.quantity = 1;
  }

  addItem() {
    this.quantity = this.quantity + 1;
  }

  removeItem() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

  sendToCart(_id, quantity){
    const addedProduct = { _id, quantity };
    const cartId = this.cartId;
    const cartStatus = this.authService.userCart.isOpen;
    if (cartStatus === 0) {
      const setOpenCart = { isOpen: 1 };
      this.cartService.updateCartStatus(cartId, setOpenCart , this.userToken).subscribe(data => {
        // this.cartId = data._id;
        this.authService.storeCartData(data);
        this.authService.loadUserCart();
      });
    }
    if (cartStatus === 1) {
      this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
        this.authService.storeCartData(data);
        this.authService.loadUserCart();
        this.currentCartProducts = this.authService.userCart.products;

      })
    }
  }
}
