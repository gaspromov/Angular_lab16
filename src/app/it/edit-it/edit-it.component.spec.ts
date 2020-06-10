import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItComponent } from './edit-it.component';

describe('EditItComponent', () => {
  let component: EditItComponent;
  let fixture: ComponentFixture<EditItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
