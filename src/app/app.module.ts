import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './_helpers';

import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent, RegisterComponent, CartComponent } from './_pages';
import { NavbarComponent } from '@app/_components';
import { AlertComponent } from '@app/_components';
import { ProductComponent } from '@app/_components';
import { ElectronicComponent } from './_pages/electronic/electronic.component';
import { JeweleryComponent } from './_pages/jewelery/jewelery.component';
import { MenComponent } from './_pages/men/men.component';
import { WomenComponent } from './_pages/women/women.component';
import { PaymentComponent} from "@app/_pages/payment/payment.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    NavbarComponent,
    AlertComponent,
    ProductComponent,
    ElectronicComponent,
    JeweleryComponent,
    MenComponent,
    WomenComponent,
    PaymentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgOptimizedImage
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
