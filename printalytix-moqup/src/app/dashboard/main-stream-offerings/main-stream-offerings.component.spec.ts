import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStreamOfferingsComponent } from './main-stream-offerings.component';

describe('MainStreamOfferingsComponent', () => {
  let component: MainStreamOfferingsComponent;
  let fixture: ComponentFixture<MainStreamOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStreamOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStreamOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
