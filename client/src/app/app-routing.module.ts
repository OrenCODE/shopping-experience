import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { SignupStepperComponent } from "./components/signup-stepper/signup-stepper.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupStepperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
