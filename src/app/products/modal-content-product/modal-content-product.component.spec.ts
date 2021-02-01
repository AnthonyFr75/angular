import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentProductComponent } from './modal-content-product.component';

describe('ModalContentProductComponent', () => {
  let component: ModalContentProductComponent;
  let fixture: ComponentFixture<ModalContentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
