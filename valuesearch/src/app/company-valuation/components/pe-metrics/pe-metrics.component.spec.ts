import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeMetricsComponent } from './pe-metrics.component';

describe('PeMetricsComponent', () => {
  let component: PeMetricsComponent;
  let fixture: ComponentFixture<PeMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
