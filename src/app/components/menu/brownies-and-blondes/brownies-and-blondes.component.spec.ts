import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowniesAndBlondesComponent } from './brownies-and-blondes.component';

describe('BrowniesAndBlondesComponent', () => {
  let component: BrowniesAndBlondesComponent;
  let fixture: ComponentFixture<BrowniesAndBlondesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowniesAndBlondesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowniesAndBlondesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
