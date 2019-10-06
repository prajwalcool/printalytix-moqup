import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PappComponent } from './papp.component';

describe('PappComponent', () => {
  let component: PappComponent;
  let fixture: ComponentFixture<PappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
