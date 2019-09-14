import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { City } from "../../models/City";
import { MatStepper } from "@angular/material";
import { Router } from "@angular/router"

@Component({
  selector: 'app-signup-stepper',
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.css']
})
export class SignupStepperComponent implements OnInit {
  isLinear: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private formIsValid: boolean = false;
  private userIsRegistered: boolean = false;

  passHide: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      identityNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      firstName: ['',Validators.compose([
        Validators.required, Validators.pattern('^[a-zA-Z ]*$')
      ])],
      lastName: ['',Validators.compose([
        Validators.required, Validators.pattern('^[a-zA-Z ]*$')
      ])],
      city: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  cities: City[] = [
    {value: 'Tel-Aviv-0', viewValue: 'Tel Aviv'}, {value: 'Jerusalem-1', viewValue: 'Jerusalem'},
    {value: 'Haifa-2', viewValue: 'Haifa'}, {value: 'Beer Sheva-3', viewValue: 'Beer Sheva'},
    {value: 'Natenya-4', viewValue: 'Netanya'}, {value: 'Rishon-Le-Zion-5', viewValue: 'Rishon Le Zion'},
    {value: 'Rehovot-6', viewValue: 'Rehovot'}, {value: 'Eilat-7', viewValue: 'Eilat'},
    {value: 'Kfar-Saba-8', viewValue: 'Kfar Saba'}, {value: 'Kiryat-Shmona-9', viewValue: 'Kiryat Shmona'},
  ];

  onFirstStepSubmit(stepper) {
    const signUpDetails = this.firstFormGroup.getRawValue();
    const identityNumber = signUpDetails.identityNumber.toString();
    const credentials = {
      identityNumber: identityNumber,
      email: signUpDetails.email,
      password: signUpDetails.password,
      password2: signUpDetails.password2
    };

    this.authService.checkUserCredentials(credentials).subscribe(data => {
      if (data.userChecked) {
        this.formIsValid = true;
        this.goForward(stepper);
      }
    }, err => {
      if (err.status === 400) {
        Object.keys(err.error).forEach(prop => {
          const formControl = this.firstFormGroup.get(prop);
          if (formControl) {
            // activate the error messages
            formControl.setErrors({
              serverError: err.error[prop]
            });
          }
        });
        this.formIsValid = false
      }
    });
  }

  onSecondStepSubmit() {
    const credentials = this.firstFormGroup.getRawValue();
    const identityNumber = credentials.identityNumber.toString();
    const shippingDetails = this.secondFormGroup.getRawValue();

    const user = {
      email: credentials.email,
      identityNumber: identityNumber,
      password: credentials.password,
      lastName: shippingDetails.lastName,
      firstName: shippingDetails.firstName,
      city: shippingDetails.city,
      street: shippingDetails.street
    };
    this.authService.registerUser(user).subscribe(user => {
      // Login and Redirect to Dashboard after a successful register
      if(user){
        const loginDetails = { email: credentials.email, password: credentials.password };
        this.redirectToDashboard(loginDetails);
      }
    }, err => {
      if (err.status === 400) {
        Object.keys(err.error).forEach(prop => {
          const formControl = this.secondFormGroup.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: err.error[prop]
            });
          }
        });
        this.userIsRegistered = false;
      }
    });
  }

  redirectToDashboard(loginDetails){
    this.authService.loginUser(loginDetails).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.authService.loadUserPayload();
        this.router.navigate(['dashboard']);
      }
    })
  }

  // Change to Promise
  goForward(stepper: MatStepper) {
    setTimeout(() => {
      if (this.formIsValid) {
        stepper.next();
      }
    }, 1500)
  }

  allowNumbersOnly(e) {
    const code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }
}
