import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmondTartsComponent } from './almond-tarts.component';

describe('AlmondTartsComponent', () => {
  let component: AlmondTartsComponent;
  let fixture: ComponentFixture<AlmondTartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmondTartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmondTartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
