import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBestSalesmanComponent } from './dashboard-best-salesman.component';

describe('DashboardBestSalesmanComponent', () => {
  let component: DashboardBestSalesmanComponent;
  let fixture: ComponentFixture<DashboardBestSalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBestSalesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBestSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
