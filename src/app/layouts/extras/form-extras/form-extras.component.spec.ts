import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExtrasComponent } from './form-extras.component';

describe('FormExtrasComponent', () => {
  let component: FormExtrasComponent;
  let fixture: ComponentFixture<FormExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
