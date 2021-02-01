import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ModalContentProductComponent } from './products/modal-content-product/modal-content-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductViewComponent,
    ModalContentProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
