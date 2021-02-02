import { Component, OnInit } from '@angular/core';
import { Product, ProductModal, Products } from './products.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentProductComponent } from './modal-content-product/modal-content-product.component';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Products>;

  constructor(public dialog: MatDialog, private productsService: ProductsService) {}

  public ngOnInit(): void {
    this.productsService.getProducts();
    this.products$ = this.productsService.getProductsUpdateListener();
  }

  public openDialog(data: ProductModal): void {
    const dialogRef = this.dialog.open(ModalContentProductComponent, {
      width: '400px',
      data
    });
    dialogRef.afterClosed().subscribe((result: ProductModal) => {
      const product = result?.product;
      switch (result?.action) {
        case 'update':
          this.productsService.updateProduct(product);
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
    this.openDialog({product, action: 'update'});
  }

  public deleteProduct(product: Product): void {
    this.productsService.deleteProduct(product.id);
  }
}
