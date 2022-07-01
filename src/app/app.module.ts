import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAddressComponent } from './compoonents/add-address/add-address.component';
import { EditAddressComponent } from './compoonents/edit-address/edit-address.component';
import { ListAddressComponent } from './compoonents/list-address/list-address.component';
import { NavbarComponent } from './compoonents/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './compoonents/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './compoonents/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
