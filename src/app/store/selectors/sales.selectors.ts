import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { map } from 'rxjs';
import { UserApi } from 'src/app/core/models';
import { IAppState } from '../reducers';

const getAppState = createFeatureSelector<IAppState>('appState');

const getSalesState = createSelector(getAppState, (state) => state.sales);
const getAllSales = createSelector(getSalesState, (state) => state?.sales);
const getBestSalesman = createSelector(
  getSalesState,
  (state) => state?.bestSalesman
);
const getOverallSales = createSelector(
  getSalesState,
  (state) => state?.overallSale
);

@Injectable()
export class SalesSelectors {
  public getSales$ = this.store$.pipe(select(getAllSales));
  public getOverallSales$ = this.store$.pipe(
    select(getOverallSales),
    map((sales) => this.transformOverallSales(sales))
  );
  public getBestSalesmanName$ = this.store$.pipe(
    select(getBestSalesman),
    map((salesman) => this.getUserName(salesman))
  );

  constructor(private readonly store$: Store<IAppState>) {}

  private transformOverallSales(sales: number): string {
    return `$ ${sales}`;
  }

  private getUserName(salesman: UserApi.IUserCredentialsApi): string {
    return salesman?.name;
  }
}
