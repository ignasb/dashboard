import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sales } from 'src/app/core/models';
import { DashboardActions } from 'src/app/store/actions';
import { IAppState } from 'src/app/store/reducers';
import { SalesSelectors } from 'src/app/store/selectors/sales.selectors';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.scss'],
})
export class DashboardShellComponent implements OnInit {
  sales$: Observable<Sales.ISale[]>;
  bestSalesman$: Observable<string>;
  overallSales$: Observable<string>;

  constructor(
    private readonly salesSelectors: SalesSelectors,
    private readonly store$: Store<IAppState>
  ) {
    this.sales$ = this.salesSelectors.getSales$;
    this.bestSalesman$ = this.salesSelectors.getBestSalesmanName$;
    this.overallSales$ = this.salesSelectors.getOverallSales$;
  }

  ngOnInit(): void {
    this.store$.dispatch(DashboardActions.loadSalesDashboard());
    this.bestSalesman$.subscribe((data) => console.log(data));
  }
}
