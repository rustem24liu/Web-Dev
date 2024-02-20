import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from "../products";
import { CartService } from "../cart.service";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, protected CartService: CartService ) {

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFormRoute = Number(routeParams.get("productId"))

    this.product = products.find(product => product.id == productIdFormRoute);
  }

  protected readonly products = products;
}