import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  productOne = new Product();
  productTwo = new Product();
  productThree = new Product();
  productFour = new Product();
  productFive = new Product();
  productsSix = new Product();

  public products: Array<Product>;

  constructor() {
    this.initProducts();
    this.products = [this.productOne, this.productTwo, this.productThree, this.productFour, this.productFive, this.productsSix];
    console.log(this.products);
  }

  addProduct(product: Product) {
    this.products.unshift(product);
  }

  initProducts() {
    this.productOne.id = '1';
    this.productOne.name = 'Submariner Date';
    this.productOne.description = `Gold coveted for its lustre and nobility. Steel reinforces
    strength and reliability. Together, they harmoniously combine the best of their properties.
    A true Rolex signature, Rolesor has featured on models since the early 1930s, one of the prominent
    pillars of the Oyster collection`;
    this.productOne.imageUrl = '/assets/images/rolex.jpg';
    this.productOne.categories = ['Fashion, Watch, Rolex'];
    this.productOne.price = 'Ksh. 1, 500';

    this.productTwo.id = '2';
    this.productTwo.name = 'Polo Shirt';
    this.productTwo.description = ` A stylish, poly-cotton polo shirt with button collar and in Drennans popular variety of colors`;
    this.productTwo.imageUrl = '/assets/images/polo.jpg';
    this.productTwo.categories = ['Fashion', 'Clothes', 'Shirts', 'Polo Shirts'];
    this.productTwo.price = 'Ksh. 1, 000';

    this.productThree.id = '3';
    this.productThree.name = 'Nike Shoes';
    this.productThree.description = `Nike, Men's Running Sports Shoes at an affordable price.`;
    this.productThree.imageUrl = '/assets/images/shoe.jpg';
    this.productThree.categories = ['Sports', 'Shoes', 'Men'];
    this.productThree.price = 'Ksh. 4, 500';

    this.productFour.id = '4',
    this.productFour.name = 'Samsung j7',
    this.productFour.description = `Smartphone Samsung GALAXY J7 2017 OR, Mobileous Android 7.0
    - Nougat - 4G, Ecran tactile 13,9 cm (5,5") - Full HD 1920 * 1080 pixels, Processeur Octoceur 1,6GHz`;
    this.productFour.imageUrl = '/assets/images/samsung.jpg',
    this.productFour.categories = ['Electronics', 'Mobile Phones', 'Samsung', 'Samsung J7'];
    this.productFour.price = 'Ksh. 26, 500';

    this.productFive.id = '5',
    this.productFive.name = 'Samsung j7',
    this.productFive.description = `Smartphone Samsung GALAXY J7 2017 OR, Mobileous Android 7.0
    - Nougat - 4G, Ecran tactile 13,9 cm (5,5") - Full HD 1920 * 1080 pixels, Processeur Octoceur 1,6GHz`;
    this.productFive.imageUrl = '/assets/images/samsung.jpg',
    this.productFive.categories = ['Electronics', 'Mobile Phones', 'Samsung', 'Samsung J7'];
    this.productFive.price = 'Ksh. 26, 500';

    this.productsSix.id = '6',
    this.productsSix.name = 'Samsung j7',
    this.productsSix.description = `Smartphone Samsung GALAXY J7 2017 OR, Mobileous Android 7.0
    - Nougat - 4G, Ecran tactile 13,9 cm (5,5") - Full HD 1920 * 1080 pixels, Processeur Octoceur 1,6GHz`;
    this.productsSix.imageUrl = '/assets/images/samsung.jpg',
    this.productsSix.categories = ['Electronics', 'Mobile Phones', 'Samsung', 'Samsung J7'];
    this.productsSix.price = 'Ksh. 26, 500';
  }

}
