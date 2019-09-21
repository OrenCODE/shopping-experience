import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../models/Product";
import {Category} from "../../models/Category";
import {MatDialog} from "@angular/material/dialog";
import {EditModalComponent} from "./edit-modal/edit-modal.component";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  isLoading: Boolean = true;
  adminToken: String;

  addProductForm: FormGroup;

  products: Product[];
  categories: Record<string, Category>;
  productsLength: Number;

  constructor(private authService: AuthService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private formBuilder: FormBuilder,
              public dialog: MatDialog
  ) {
  }

  ngOnInit() {

    this.authService.loadToken();
    this.adminToken = this.authService.currentUserToken;

    this.getAllProducts();
    this.getAllCategories();

    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required]
    })
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.productsLength = data.length;
      console.log(this.productsLength)
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

  openDialog(productValues, categoriesObject): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      data: {
        preEditFields: productValues,
        categories: categoriesObject
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // const product = this.products.find(product => product._id === result._id);
      this.getAllProducts();
      // console.log(product._id);
    })
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
