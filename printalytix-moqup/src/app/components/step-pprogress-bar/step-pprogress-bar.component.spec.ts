import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPprogressBarComponent } from './step-pprogress-bar.component';

describe('StepPprogressBarComponent', () => {
  let component: StepPprogressBarComponent;
  let fixture: ComponentFixture<StepPprogressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPprogressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPprogressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
