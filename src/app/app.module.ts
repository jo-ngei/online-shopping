import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NewProductComponent,
    ProductListComponent,
    CategoriesComponent,
    CategoryComponent,
    CarouselComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
