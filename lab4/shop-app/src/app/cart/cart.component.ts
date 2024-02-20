import { Component } from '@angular/core';
import { CartService} from "../cart.service";
import {products} from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();
    constructor(
        private cartService: CartService
    ) {
    }

  protected readonly products = products;
}
