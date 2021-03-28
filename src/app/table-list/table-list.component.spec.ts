import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { TableListComponent } from './table-list.component';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatTableModule ],
      declarations: [ TableListComponent ],
      schemas: [  ]
    })
    .compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
