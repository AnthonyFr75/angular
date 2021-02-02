import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, Products } from "../products.model";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input()
  public products: Products;

  @Output()
  public delete: EventEmitter<Product> = new EventEmitter();

  @Output()
  public update: EventEmitter<Product> = new EventEmitter();

  public onDelete(product: Product): void {
    this.delete.emit(product);
  }

  public onUpdate(product: Product): void {
    this.update.emit(product);
  }
}
