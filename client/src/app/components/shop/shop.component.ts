import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { CategoryService } from "../../services/category.service";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";

import { Category } from "../../models/Category";
import { Product } from "../../models/Product";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  isLoading: Boolean = true;
  // search: FormGroup;
  searchInputOn: Boolean = true;

  categories: Category[];
  productsByCategory: Product[];

  products: Record<string, Product>;
  productsForCart: Record<string,Product>;

  productsLength: Number;
  currentCartProducts: Product[];

  productId: String;
  cartId: String;

  public quantity: number;
  public totalPrice: number;
  public searchValue: string = '';

  userId: String;
  userToken: String;

  constructor(private authService: AuthService,
              private categoryService: CategoryService,
              private productService: ProductService,
              private cartService: CartService,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.authService.loadUserCart();
    this.userId = this.authService.currentUserData.id;
    this.userToken = this.authService.currentUserToken;
    this.cartId = this.authService.userCart._id;

    this.getAllProducts();
    this.checkIfUserHasCart();
    this.getAllCategories();

    // this.search = this.formBuilder.group({search: ['']})
  }

  showAllProducts() {
    this.productsByCategory = null;
    this.searchInputOn = true
  }

  filterProductsByCategory(categoryId) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.productsByCategory = data;
      this.searchInputOn = false
    })
  }

  deleteProductFromCart(_id) {
    const productId = {_id};
    this.cartService.deleteProductFromCart(this.cartId, productId, this.userToken).subscribe(data => {
      console.log(data);
      this.updateLocalStorage(data);
      this.setTotalPrice();
    })
  }

  cleanCart() {
    this.cartService.deleteAllProductsFromCart(this.cartId, this.userToken).subscribe(data => {
      console.log(data);
      this.updateLocalStorage(data);
    })
  }

  addToCart(productId) {
    const cartProduct = this.currentCartProducts.find(product => product._id === productId);
    if (cartProduct === undefined) {
      this.productId = productId;
      this.quantity = 1;
    } else if (cartProduct._id === productId) {
      this.quantity = cartProduct.quantity as any;
      this.productId = productId
    }
  }

  addItem(_id) {
    this.quantity += 1;
  }

  removeItem(_id) {
    // if (this.quantity === 1) {
    //   this.deleteProductFromCart(_id);
    //   this.quantity = 1;
    //
    // }
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  sendToCart(_id, quantity) {
    const addedProduct = {_id, quantity};
    const cartId = this.cartId;
    const cartStatus = this.authService.userCart.isOpen;
    if (cartStatus === 0) {
      this.updateCartStatus();
    }
    this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
      this.updateLocalStorage(data);
      this.setTotalPrice();
    })
  }

  setTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.currentCartProducts.length; i++) {
      this.totalPrice += this.currentCartProducts[i].quantity as any * this.productsForCart[this.currentCartProducts[i]._id as any].price;
    }
  }

  onUserSearch(searchValue) {
    this.productService.searchProducts(searchValue).subscribe(data => {
      const valueFound = data;
      const results = {};
      for (let i = 0; i < valueFound.length; i++) {
        results[valueFound[i]._id] = valueFound[i]
      }
      this.products = results;
    })
  }

  updateLocalStorage(cartData) {
    this.authService.storeCartData(cartData);
    this.authService.loadUserCart();
    this.currentCartProducts = this.authService.userCart.products;
  }

  updateCartStatus() {
    const cartId = this.cartId;
    const setOpenCart = {isOpen: 1};
    this.cartService.updateCartStatus(cartId, setOpenCart, this.userToken).subscribe(data => {
      this.updateLocalStorage(data)
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.productsForCart = data;
      this.productsLength = Object.keys(data).length;
      console.log(this.products, this.productsLength);
    });
  }

  checkIfUserHasCart() {
    this.cartService.checkIfUserHasCart(this.userId, this.userToken).subscribe(data => {
      this.currentCartProducts = data.cart.products;
      this.setTotalPrice();
      console.log(this.currentCartProducts)
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
      this.isLoading = false;
    });
  }



}
