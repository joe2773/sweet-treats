import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeSlabsComponent } from './cake-slabs.component';

describe('CakeSlabsComponent', () => {
  let component: CakeSlabsComponent;
  let fixture: ComponentFixture<CakeSlabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeSlabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeSlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
