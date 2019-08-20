import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { SignupStepperComponent } from "./components/signup-stepper/signup-stepper.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupStepperComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
