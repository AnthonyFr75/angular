import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  ProductModal } from '../products.model';

@Component({
  selector: 'app-modal-content-product',
  templateUrl: './modal-content-product.component.html',
  styleUrls: ['./modal-content-product.component.scss']
})
export class ModalContentProductComponent {
  private phoneInternationalRegex = new RegExp(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/);

  public productGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.pattern(this.phoneInternationalRegex), Validators.required]),
    price: new FormControl(0, [Validators.pattern('^[0-9]*$'), Validators.required]),
    rating: new FormControl(0, [Validators.pattern('^[0-5]$'), Validators.required]),
    warranty_years: new FormControl(0, [Validators.pattern('^[1-9][0-9]?$|^100$'), Validators.required]),
    available: new FormControl(false)
  });

  public productKeys = Object.keys(this.productGroup.controls);
  public id = -1;
  public formvalid = true;
  public action: string;

  constructor(
    public dialogRef: MatDialogRef<ModalContentProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductModal) {
      const product = data.product;
      if (product?.id) this.id = product?.id;
      product && this.productGroup.patchValue(product);
      this.action = data.action;
  }

  public toUpperCase(name: string): string {
    return name.toUpperCase();
  }

  public validateForm(): void {
    this.formvalid = this.productGroup.valid;
    this.dialogRef.close({
      product: { id: this.id, ...this.productGroup.value},
      action: this.action
    });
  }
}
