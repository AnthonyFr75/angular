import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../products.model';

@Component({
  selector: 'app-modal-content-product',
  templateUrl: './modal-content-product.component.html',
  styleUrls: ['./modal-content-product.component.scss']
})
export class ModalContentProductComponent implements OnInit {
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

  public formvalid = true;

  constructor(
    public dialogRef: MatDialogRef<ModalContentProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {product: Product} | null) {
      const product = data?.product;
      product && this.productGroup.patchValue(product);
  }

  public ngOnInit(): void {
    this.productGroup.valueChanges.subscribe(f => console.log(f))
  }

  public validateForm(): void {
    this.formvalid = this.productGroup.valid;
  }
}
