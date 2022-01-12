import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-best-salesman',
  templateUrl: './dashboard-best-salesman.component.html',
  styleUrls: ['./dashboard-best-salesman.component.scss'],
})
export class DashboardBestSalesmanComponent {
  @Input()
  bestSalesman$!: Observable<string>;
}
