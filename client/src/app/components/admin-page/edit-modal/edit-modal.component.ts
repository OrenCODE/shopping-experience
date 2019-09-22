import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  editProductForm: FormGroup;
  adminToken: any;

  constructor(private productService: ProductService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.authService.loadToken();
    this.adminToken = this.authService.currentUserToken;

    this.editProductForm = this.formBuilder.group({
      name: '',
      categoryId: '',
      price: '',
      imageURL: ''
    });
    const editForm = this.editProductForm.controls;
    const preEditFields = this.data.preEditFields;

    editForm.categoryId.setValue(preEditFields.categoryId);
    editForm.name.setValue(preEditFields.name);
    editForm.price.setValue(preEditFields.price);
    editForm.imageURL.setValue(preEditFields.imageURL);
  }

  save(productId){
    const newFormValues = this.editProductForm.getRawValue();

    const editedProduct = {
      name: newFormValues.name.toLowerCase(),
      categoryId: newFormValues.categoryId,
      price: newFormValues.price,
      imageURL: newFormValues.imageURL
    };
    console.log(editedProduct);

    this.productService.editProduct(productId, editedProduct, this.adminToken).subscribe(data => {
      console.log(data);
      this.dialogRef.close(data);
    });
  }

  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
