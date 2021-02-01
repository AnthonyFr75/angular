import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-content-product',
  templateUrl: './modal-content-product.component.html',
  styleUrls: ['./modal-content-product.component.scss']
})
export class ModalContentProductComponent implements OnInit {

  public productGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    type: new FormControl(''),
    phone: new FormControl(''),
    price: new FormControl(0),
    rating: new FormControl(0),
    warranty_years: new FormControl(0),
    available: new FormControl(false)
  });

  public ngOnInit(): void {
    console.log(Object.keys(this.productGroup.controls)[0])
  }
}
