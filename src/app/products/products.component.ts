import { Component, OnInit } from '@angular/core';
import { Product, Products } from "./products.model";
import { MatDialog } from '@angular/material/dialog';
import { ModalContentProductComponent } from './modal-content-product/modal-content-product.component';

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
    id: 127,
    name: 'StringStringString',
    type: 'StringString',
    phone: 'String',
    price: 2,
    rating: 1,
    warranty_years: 5,
    available: true
  };

  public products: Products;

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.products = [this.product1, this.product2];
  }

  public openDialog(data: {product: Product} | null): void {
    const dialogRef = this.dialog.open(ModalContentProductComponent, {
      width: '300px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  public updateProduct(product: Product): void {
    this.openDialog({product: product});
  }

  public deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p.id !== product.id)
  }
}
