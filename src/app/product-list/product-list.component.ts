import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product>;

  public name: string;

  constructor() { }

  ngOnInit() {
    this.products.forEach(element => {
      this.name = element._name;
     console.log(this.name);
    });
  }

}
