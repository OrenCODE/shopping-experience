import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./gurds/auth.gurd";

import { NgRedux, NgReduxModule, DevToolsExtension } from "ng2-redux";
import { IAppState, rootReducer } from "./store";
import { InitialState } from "./store";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatMenuModule } from "@angular/material";
import { MatSelectModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatProgressBarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { NgHighlightModule } from 'ngx-text-highlight';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { SignupStepperComponent } from './components/signup-stepper/signup-stepper.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupStepperComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    ShopComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgReduxModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMatSearchBarModule,
    NgHighlightModule,
    FlexLayoutModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension) {

    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, InitialState, [], enhancers);
  }
}
