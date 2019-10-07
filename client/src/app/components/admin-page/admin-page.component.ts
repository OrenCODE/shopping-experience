import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProductService } from "../../services/product.service";
import { CategoryService } from "../../services/category.service";
import { Router } from "@angular/router";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";
import { MatDialog } from "@angular/material/dialog";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
import { AddModalComponent } from "./add-modal/add-modal.component";
import { CartService } from "../../services/cart.service";
import { User } from "../../models/User";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  isLoading: Boolean = true;

  admin: User;
  adminId: String;
  adminToken: String;

  products: Product[];
  categories: Record<string, Category>;
  productsLength: Number;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private cartService: CartService,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getUserAuthDetails();
    this.getCart();
    this.getAllProducts();
    this.getAllCategories();
  }

  getUserAuthDetails(){
    this.authService.loadUserPayload();
    this.authService.loadToken();
    this.admin = this.authService.currentUserData;
    this.adminId = this.authService.currentUserData.id;
    this.adminToken = this.authService.currentUserToken;
  }

  getCart() {
    this.cartService.getUserCartStatus(this.adminId, this.adminToken).subscribe(data => {
      this.authService.storeCartData(data.cart)
    })
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.productsLength = data.length;
    })
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.convertArrToObject(data)
    })
  }

  convertArrToObject(productsArray) {
    const productsObj = {};
    for (let i = 0; i < productsArray.length; i++) {
      productsObj[productsArray[i]._id] = productsArray[i]
    }
    this.categories = productsObj;
    this.isLoading = false
  }

  openEditDialog(productValues, categoriesObject): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      data: {
        preEditFields: productValues,
        categories: categoriesObject
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    })
  }

  openAddDialog(categoriesObject): void {
    const dialogRef = this.dialog.open(AddModalComponent, {
      data: {
        categories: categoriesObject
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    })
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
