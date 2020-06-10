import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLegalComponent } from './edit-legal.component';

describe('EditLegalComponent', () => {
  let component: EditLegalComponent;
  let fixture: ComponentFixture<EditLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
