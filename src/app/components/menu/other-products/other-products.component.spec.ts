import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProductsComponent } from './other-products.component';

describe('OtherProductsComponent', () => {
  let component: OtherProductsComponent;
  let fixture: ComponentFixture<OtherProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
