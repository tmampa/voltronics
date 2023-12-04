import { Component } from '@angular/core';
import {User} from "@app/_models";
import {AccountService} from "@app/_services";
import { CartService } from "@app/_services";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user?: User | null;
   pressed: boolean = false;

  constructor(private accountService: AccountService, public cartService: CartService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }

  protected readonly CartService = CartService;
}
