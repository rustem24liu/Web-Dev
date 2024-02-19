import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  message: string;
  date: string = '';
  items = ['Almaty', 'Uralsk', 'Aktobe', 'Tashkent']
  constructor() {
    this.message = "Products"
    setInterval(()=> {
      this.date = new Date().toTimeString();
    }, 1000)
  }
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/