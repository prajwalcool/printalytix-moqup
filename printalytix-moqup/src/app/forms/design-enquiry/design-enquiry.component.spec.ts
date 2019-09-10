import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignEnquiryComponent } from './design-enquiry.component';

describe('DesignEnquiryComponent', () => {
  let component: DesignEnquiryComponent;
  let fixture: ComponentFixture<DesignEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
