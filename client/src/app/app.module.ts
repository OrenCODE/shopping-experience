// Core Modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

// Authentication Guards //
import { AuthGuard } from "./gurds/auth.gurd";
import { AdminGuard } from "./gurds/admin.gurd";

// Angular Material + Animations //
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from "@angular/material";
import { MatButtonToggleModule } from "@angular/material";
import { MatBadgeModule } from "@angular/material";
import { MatDialogModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatMenuModule } from "@angular/material";
import { MatSelectModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatProgressBarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { NgHighlightModule } from 'ngx-text-highlight';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CountUpModule } from 'countup.js-angular2';

// Components //
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { FooterComponent } from './components/layout/footer/footer.component';
import { SignupStepperComponent } from './components/signup-stepper/signup-stepper.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShopComponent } from './components/shop/shop.component';
import { OrderComponent } from './components/order/order.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditModalComponent } from './components/admin-page/edit-modal/edit-modal.component';
import { AddModalComponent } from './components/admin-page/add-modal/add-modal.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';


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
    OrderComponent,
    InvoiceComponent,
    AdminPageComponent,
    NotFoundComponent,
    EditModalComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
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
    MatDialogModule,
    NgMatSearchBarModule,
    NgHighlightModule,
    FlexLayoutModule,
    CountUpModule,
    MDBBootstrapModule.forRoot(),
    MatBadgeModule,
    MatButtonToggleModule
  ],
  entryComponents: [
    EditModalComponent,
    AddModalComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

