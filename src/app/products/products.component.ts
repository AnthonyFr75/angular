import { Component, OnInit } from '@angular/core';
import { Products } from "./products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public product1 = {
    id: 121,
    name: 'String',
    type: 'String',
    phone: 'String',
    price: 2,
    rating: 1,
    warranty_years: 5,
    available: true
  };

  public product2 = {
    id: 121,
    name: 'StringStringString',
    type: 'StringString',
    phone: 'String',
    price: 2,
    rating: 1,
    warranty_years: 5,
    available: true
  };

  public products: Products;

  public ngOnInit(): void {
    this.products = [this.product1, this.product2];
  }

}
