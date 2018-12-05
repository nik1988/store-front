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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
