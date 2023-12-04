import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, RegisterComponent, LoginComponent, CartComponent } from "./_pages";
import { AuthGuard } from "@app/_helpers";
import {ElectronicComponent} from "@app/_pages/electronic/electronic.component";
import {JeweleryComponent} from "@app/_pages/jewelery/jewelery.component";
import {MenComponent} from "@app/_pages/men/men.component";
import {WomenComponent} from "@app/_pages/women/women.component";
import {PaymentComponent} from "@app/_pages/payment/payment.component";

const usersModule = () => import('./_pages/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', component : HomeComponent, title: 'EasyBuy - SA Leading E-Commerce' },
  { path: 'electronics', component : ElectronicComponent, title: 'EasyBuy - Electronics' },
  { path: 'jewelery', component : JeweleryComponent, title: 'EasyBuy - Jewelery' },
  { path: 'mens', component: MenComponent, title: 'EasyBuy - Men Fashion' },
  { path: 'womens', component: WomenComponent, title: 'EasyBuy - Women Fashion' },
  { path: 'users', loadChildren: usersModule },
  { path: 'account/register', component : RegisterComponent, title: 'EasyBuy - Register' },
  { path: 'account/login', component : LoginComponent, title: 'EasyBuy - Login' },
  { path: 'cart', component : CartComponent, title: 'EasyBuy - Cart' },
    { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard], title: 'EasyBuy - Payment' },
  { path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
