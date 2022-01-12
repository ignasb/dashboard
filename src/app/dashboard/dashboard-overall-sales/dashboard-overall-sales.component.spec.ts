import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverallSalesComponent } from './dashboard-overall-sales.component';

describe('DashboardOverallSalesComponent', () => {
  let component: DashboardOverallSalesComponent;
  let fixture: ComponentFixture<DashboardOverallSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOverallSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverallSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
