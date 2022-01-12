import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from 'src/app/core/models';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  @Input()
  data$!: Observable<Sales.ISale[]>;

  dataSource: Sales.ISale[] = [];

  displayedColumns = ['name', 'amount', 'date'];

  constructor() {}

  ngOnInit(): void {
    this.data$.subscribe((data) => {
      this.dataSource = data;
    });
  }
}
