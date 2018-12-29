import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppBootstrapModule} from "./app-bootstrap.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "./app-material.module";
import { HomeComponent } from './home/home.component';
import {AppRouterModule} from "./app-router.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { MyAccountComponent } from './my-account/my-account.component';
import {HttpClientModule} from "@angular/common/http";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserShippingComponent } from './user-shipping/user-shipping.component';
import { BookListComponent } from './book-list/book-list.component';
import {DataTableModule} from "angular-6-datatable";
import {DataFilterPipe} from "../pipe/data-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    UserPaymentComponent,
    UserShippingComponent,
    BookListComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    DataTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
