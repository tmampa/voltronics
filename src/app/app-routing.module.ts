import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, RegisterComponent, LoginComponent, CartComponent } from "./_pages";
import { AuthGuard } from "@app/_helpers";

const routes: Routes = [
  { path: '', component : HomeComponent, canActivate: [AuthGuard] },
  { path: 'account/register', component : RegisterComponent },
  { path: 'account/login', component : LoginComponent },
  { path: 'cart', component : CartComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
