import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItComponent } from './view-it.component';

describe('ViewItComponent', () => {
  let component: ViewItComponent;
  let fixture: ComponentFixture<ViewItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
