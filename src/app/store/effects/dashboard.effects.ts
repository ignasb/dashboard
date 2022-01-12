import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { DashboardActions, SalesActions } from '../actions';
import { IAppState } from '../reducers';
import { UserSelectors } from '../selectors/user.selectors';

@Injectable()
export class DashboardEffects {
  public loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadSalesDashboard),
      switchMap(() => this.userSelectors.getUserToken$),
      switchMap((token) => [
        SalesActions.loadBestSalesman({ token }),
        SalesActions.loadSales({ token }),
        SalesActions.loadOverallSales({ token }),
      ])
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userSelectors: UserSelectors
  ) {}
}
