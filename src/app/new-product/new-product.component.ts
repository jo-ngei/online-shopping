import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product: Product = new Product();
  @Output() public productAdd = new EventEmitter();
  public options: Array<string> = ['Men', 'Women', 'Fashion', 'Cars', 'Electronics', 'Clothes'];

  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public categories: string [];
  public price: string;

  constructor() {

  }

  ngOnInit() {
    this.addProduct();
  }

  createNewProduct() {
    this.id = this.product._id;
    this.name = this.product._name;
    this.description = this.product._description;
    this.imageUrl = this.product._imageUrl;
    this.categories = this.product._categories;
    this.price = this.product._price;
  }

  addProduct() {
    this.createNewProduct();
    this.productAdd.emit(this.product);
  }

}

