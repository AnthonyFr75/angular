import { Component, Input } from '@angular/core';
import { Products } from "../products.model";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input()
  public products: Products;
}
