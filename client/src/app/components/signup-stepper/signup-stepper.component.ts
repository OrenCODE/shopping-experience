import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {City} from "../../models/City";
import {Credentials} from "../../models/Credentials";
import {MatStepper} from "@angular/material";

@Component({
  selector: 'app-signup-stepper',
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.css']
})
export class SignupStepperComponent implements OnInit {
  isLinear: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private credentialsError: Credentials;
  private formIsValid: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      // identityNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')
      // ])],
      identityNumber: ['', Validators.required],
      // email: ['',
      //   Validators.compose([Validators.required, Validators.email])],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  cities: City[] = [
    {value: 'Tel-Aviv-0', viewValue: 'Tel Aviv'},
    {value: 'Jerusalem-1', viewValue: 'Jerusalem'},
    {value: 'Haifa-2', viewValue: 'Haifa'},
    {value: 'Beer Sheva-3', viewValue: 'Beer Sheva'},
    {value: 'Natenya-4', viewValue: 'Netanya'},
    {value: 'Rishon-Le-Zion-5', viewValue: 'Rishon Le Zion'},
    {value: 'Rehovot-6', viewValue: 'Rehovot'},
    {value: 'Eilat-7', viewValue: 'Eilat'},
    {value: 'Kfar-Saba-8', viewValue: 'Kfar Saba'},
    {value: 'Kiryat-Shmona-9', viewValue: 'Kiryat Shmona'},
  ];

  onSubmit() {
    const credentials = this.firstFormGroup.getRawValue();
    console.log(credentials);
    this.authService.checkUserCredentials(credentials).subscribe(data => {
      if (data.userChecked) {
        this.formIsValid = true;
      }
    }, err => {
      if (err.status === 400) {
        console.log(err.error);
        this.credentialsError = err.error;
        this.formIsValid = false
      }
    });
  }

  // Change to Promise
  goForward(stepper: MatStepper) {
    setTimeout(() => {
      if (this.formIsValid) {
        stepper.next();
      } else {
        console.log(this.firstFormGroup);
        this.firstFormGroup.reset();
      }
    }, 1500)
  }

  preventPaste(e) {
    e.preventDefault();
    return false;
  }

  allowNumbersOnly(e) {
    const code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }
}
