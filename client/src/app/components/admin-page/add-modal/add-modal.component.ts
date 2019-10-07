import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  addProductForm: FormGroup;
  adminToken: any;

  constructor(private productService: ProductService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.authService.loadToken();
    this.adminToken = this.authService.currentUserToken;

    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required]
    })
  }

  save(){
    const newProductValues = this.addProductForm.getRawValue();

    const newProduct = {
      name: newProductValues.name.toLowerCase(),
      categoryId: newProductValues.categoryId,
      price: newProductValues.price,
      imageURL: newProductValues.imageURL
    };

    this.productService.createNewProduct(newProduct, this.adminToken).subscribe(data => {
      this.dialogRef.close(data);
    });
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
