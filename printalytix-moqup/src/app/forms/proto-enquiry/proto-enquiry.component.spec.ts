import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoEnquiryComponent } from './proto-enquiry.component';

describe('ProtoEnquiryComponent', () => {
  let component: ProtoEnquiryComponent;
  let fixture: ComponentFixture<ProtoEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
