import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();

  public id: string = this.product._id;
  public name: string;
  public description: string;
  public categories: Array<string>;
  public imageUrl: string;
  public price: string;

  constructor() { }

  ngOnInit() {
    this.name = this.product._name;
    this.categories = this.product._categories;
    this.imageUrl =  this.product._imageUrl;
    this.price = this.product._price;

    this.setDescription();

  }

  setDescription() {
    if (this.product._description.length > 150) {
      this.description = this.product._description.substring(0, 150) + '...';
    } else {
      this.description = this.product._description;
    }
  }

}
