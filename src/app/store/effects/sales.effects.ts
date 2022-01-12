import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SalesService } from 'src/app/core/services/sales.service';
import { SalesActions } from '../actions';
import { IAppState } from '../reducers';

@Injectable()
export class SalesEffects {
  public getSales$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesActions.loadSales),
      switchMap(({ token }) =>
        this.salesService.getSales$(token).pipe(
          map((sales) => SalesActions.loadSalesSuccess({ sales })),
          catchError(() => of(SalesActions.loadSalesFail()))
        )
      )
    )
  );

  public getBestSalesman$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesActions.loadBestSalesman),
      switchMap(({ token }) =>
        this.salesService.getBestSalesman$(token).pipe(
          map((salesman) => SalesActions.loadBestSalesmanSuccess({ salesman })),
          catchError(() => of(SalesActions.loadBestSalesmanFail()))
        )
      )
    )
  );

  public getOverallSales$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesActions.loadOverallSales),
      switchMap(({ token }) =>
        this.salesService.getOverallSales$(token).pipe(
          map((sales) => SalesActions.loadOverallSalesSuccess({ sales })),
          catchError(() => of(SalesActions.loadOverallSalesFail()))
        )
      )
    )
  );

  constructor(
    private readonly store$: Store<IAppState>,
    private readonly actions$: Actions,
    private readonly salesService: SalesService
  ) {}
}
