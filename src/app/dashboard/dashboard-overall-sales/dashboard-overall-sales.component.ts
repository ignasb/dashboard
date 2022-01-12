import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-overall-sales',
  templateUrl: './dashboard-overall-sales.component.html',
  styleUrls: ['./dashboard-overall-sales.component.scss'],
})
export class DashboardOverallSalesComponent implements OnInit {
  @Input()
  overallSales$!: Observable<string>;

  constructor() {}

  ngOnInit(): void {}
}
