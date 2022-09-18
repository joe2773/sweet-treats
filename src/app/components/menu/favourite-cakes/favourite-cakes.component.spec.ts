import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCakesComponent } from './favourite-cakes.component';

describe('FavouriteCakesComponent', () => {
  let component: FavouriteCakesComponent;
  let fixture: ComponentFixture<FavouriteCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
