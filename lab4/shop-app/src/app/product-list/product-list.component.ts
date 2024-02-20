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


  share(productLink: string) {
    const shareMessage = `Check out: ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }
  sharetg(productLink: string){

  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  getDescriptionSlice(description: string): string{
    return description ? description.slice(0, 120) + '...' : '';
  }
  getNameSlice(name: string): string{
    return name ? name.slice(0, 33) + '...' : '';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
