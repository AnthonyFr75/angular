import { Component, OnInit } from '@angular/core';
import { Product, ProductModal, Products } from "./products.model";
import { MatDialog } from '@angular/material/dialog';
import { ModalContentProductComponent } from './modal-content-product/modal-content-product.component';
import { ProductsService } from "./products.service";
import { Observable } from 'rxjs';

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
    available: false
  };

  public products$: Observable<Products>;
  public products: Products;

  constructor(public dialog: MatDialog, private productsService: ProductsService) {}

  public ngOnInit(): void {
    this.products = [this.product1, this.product2];
    this.productsService.getProducts();
    this.products$ = this.productsService.getProductsUpdateListener();
  }

  public openDialog(data: ProductModal): void {
    const dialogRef = this.dialog.open(ModalContentProductComponent, {
      width: '300px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result: ProductModal) => {
      const product = result?.product;
      switch(result?.action) {
        case 'update':
          this.products = this.products.map(p => p.id === product.id ? product : p);
          break;
        case 'add':
          this.productsService.addProduct(product);
          break;
        default:
          console.log('no click');
      }
    });
  }

  public updateProduct(product: Product): void {
    this.openDialog({product: product, action: 'update'});
  }

  public deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p.id !== product.id)
  }
}
