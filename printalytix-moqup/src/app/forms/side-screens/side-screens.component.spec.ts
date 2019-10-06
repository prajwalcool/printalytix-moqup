import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideScreensComponent } from './side-screens.component';

describe('SideScreensComponent', () => {
  let component: SideScreensComponent;
  let fixture: ComponentFixture<SideScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
