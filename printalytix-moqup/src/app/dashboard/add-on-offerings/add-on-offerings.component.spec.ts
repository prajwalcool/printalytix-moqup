import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnOfferingsComponent } from './add-on-offerings.component';

describe('AddOnOfferingsComponent', () => {
  let component: AddOnOfferingsComponent;
  let fixture: ComponentFixture<AddOnOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOnOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
