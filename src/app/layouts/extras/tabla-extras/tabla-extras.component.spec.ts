import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaExtrasComponent } from './tabla-extras.component';

describe('TablaExtrasComponent', () => {
  let component: TablaExtrasComponent;
  let fixture: ComponentFixture<TablaExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
