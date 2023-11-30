import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, RegisterComponent, LoginComponent, CartComponent } from "./_pages";
import { AuthGuard } from "@app/_helpers";
import {ElectronicComponent} from "@app/_pages/electronic/electronic.component";
import {JeweleryComponent} from "@app/_pages/jewelery/jewelery.component";
import {MenComponent} from "@app/_pages/men/men.component";
import {WomenComponent} from "@app/_pages/women/women.component";

const usersModule = () => import('./_pages/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', component : HomeComponent, canActivate: [AuthGuard] },
  { path: 'electronics', component : ElectronicComponent, canActivate: [AuthGuard] },
  { path: 'jewelery', component : JeweleryComponent, canActivate: [AuthGuard] },
  { path: 'mens', component: MenComponent, canActivate: [AuthGuard] },
  { path: 'womens', component: WomenComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account/register', component : RegisterComponent },
  { path: 'account/login', component : LoginComponent },
  { path: 'cart', component : CartComponent },
  { path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
