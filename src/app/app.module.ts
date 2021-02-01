import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
