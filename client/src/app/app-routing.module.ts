import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./gurds/auth.gurd";

import { HomeComponent } from "./components/home/home.component";
import { SignupStepperComponent } from "./components/signup-stepper/signup-stepper.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ShopComponent } from "./components/shop/shop.component";
import { OrderComponent } from "./components/order/order.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupStepperComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate:[AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate:[AuthGuard] },
  { path: 'invoice', component: InvoiceComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
