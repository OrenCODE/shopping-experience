import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { CategoryService } from "../../services/category.service";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";
import { FormControl } from "@angular/forms";

import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  navbarOpen = false;
  control: FormControl = new FormControl('');

  isLoading: Boolean = true;
  searchInputOn: Boolean = true;
  numOfSearchResults: Number;

  categories: Category[];
  productsByCategory: Product[];

  products: Record<string, Product>;
  productsForCart: Record<string, Product>;

  productsLength: Number;
  currentCartProducts: Product[];
  totalCartProductsQuantity: Number;

  productId: String;
  categoryId: String;
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
    this.getUserCartStatus();
    this.getAllCategories();
    this.setTotalCartProductsQuantity();
  }

  showAllProducts() {
    this.categoryId = null;
    this.productsByCategory = null;
    this.searchInputOn = true;
  }

  filterProductsByCategory(categoryId) {
    this.categoryId = categoryId;
    this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.productsByCategory = data;
      this.searchInputOn = false;
    })
  }

  deleteProductFromCart(_id) {
    const productId = {_id};
    this.cartService.deleteProductFromCart(this.cartId, productId, this.userToken).subscribe(data => {
      this.updateLocalStorage(data);
      this.setTotalPrice();
      this.setTotalCartProductsQuantity();
    });
    if (this.currentCartProducts.length === 1){
      const status = {isOpen: 0};
      const cartId = this.cartId;
      this.updateCartStatus(cartId, status);
    }
  }

  emptyCart() {
    this.cartService.deleteAllProductsFromCart(this.cartId, this.userToken).subscribe(data => {
      this.updateLocalStorage(data);
      this.setTotalPrice();
      this.setTotalCartProductsQuantity();
    });
    const status = {isOpen: 0};
    const cartId = this.cartId;
    this.updateCartStatus(cartId, status);
  }

  addToCart(productId) {
    const cartProduct = this.currentCartProducts.find(product => product._id === productId);
    if (cartProduct === undefined) {
      this.productId = productId;
      this.quantity = 0;
    } else if (cartProduct._id === productId) {
      this.quantity = cartProduct.quantity as any;
      this.productId = productId
    }
  }

  addItem(_id) {
    this.quantity += 1;
    this.sendToCart(_id, this.quantity)
  }

  removeItem(_id) {
    if (this.quantity - 1 === 0) {
      this.deleteProductFromCart(_id);
      this.quantity -= 1;
    }
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.sendToCart(_id, this.quantity)
    }
  }

  sendToCart(_id, quantity) {

    if(quantity === null){
      return;
    }

    const addedProduct = {_id, quantity};
    const cartId = this.cartId;
    const cartStatus = this.authService.userCart.isOpen;
    if (cartStatus === 0) {
      const status = {isOpen: 1, date: new Date()};
      this.updateCartStatus(cartId, status);
    }
    this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
      this.updateLocalStorage(data);
      this.setTotalPrice();
      this.setTotalCartProductsQuantity();
    });

  }

  setTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.currentCartProducts.length; i++) {
      this.totalPrice += this.currentCartProducts[i].quantity as any * this.productsForCart[this.currentCartProducts[i]._id as any].price;
    }
    this.updateCartTotalPrice();
  }

  onUserSearch(searchValue) {
    const search = searchValue.toLowerCase();
    this.productService.searchProducts(search).subscribe(data => {
      const valueFound = data;
      const results = {};
      for (let i = 0; i < valueFound.length; i++) {
        results[valueFound[i]._id] = valueFound[i]
      }
      this.products = results;
      this.numOfSearchResults = valueFound.length
    })
  }

  updateLocalStorage(cartData) {
    this.authService.storeCartData(cartData);
    this.authService.loadUserCart();
    this.currentCartProducts = this.authService.userCart.products;
  }

  updateCartStatus(cartId, cartStatus) {
    this.cartService.updateCartStatus(cartId, cartStatus, this.userToken).subscribe(data => {
      this.updateLocalStorage(data)
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.convertArrToObject(data);
      this.productsLength = Object.keys(data).length;
    });
  }

  getUserCartStatus() {
    this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
      this.currentCartProducts = data.cart.products;
      this.setTotalPrice();
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
      this.isLoading = false;
    });
  }

  updateCartTotalPrice() {
    const totalCartPrice = {totalCartPrice: this.totalPrice};
    this.cartService.setCartTotalPrice(this.cartId, totalCartPrice, this.userToken).subscribe(data => {
      this.updateLocalStorage(data);
    })
  }

  convertArrToObject(productsArray) {
    const productsObj = {};
    for (let i = 0; i < productsArray.length; i++) {
      productsObj[productsArray[i]._id] = productsArray[i]
    }
    this.products = productsObj;
    this.productsForCart = productsObj;
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  setTotalCartProductsQuantity() {
    const cartProductsArr: Product[] = this.authService.userCart.products;
    const cartProductsQuantityArr = cartProductsArr.map(obj => obj.quantity);
    this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  allowNumbersOnly(e) {
    const code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }

}
