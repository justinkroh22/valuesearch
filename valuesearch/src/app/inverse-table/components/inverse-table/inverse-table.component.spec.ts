import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverseTableComponent } from './inverse-table.component';

describe('InverseTableComponent', () => {
  let component: InverseTableComponent;
  let fixture: ComponentFixture<InverseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InverseTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InverseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
