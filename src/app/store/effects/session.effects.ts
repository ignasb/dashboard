import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { interval, mapTo, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { UserActions } from '../actions';

@Injectable()
export class SessionEffects {
  public startRefreshTokenInterval$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccess),
      switchMap(() => this.refreshTokenInterval$)
    )
  );

  public stopRefreshTokenInterval$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.stopTimer$.next(null))
      ),
    { dispatch: false }
  );

  stopTimer$ = new Subject();

  refreshTokenInterval$ = interval(10000).pipe(
    takeUntil(this.stopTimer$),
    mapTo(UserActions.refreshToken())
  );

  constructor(private readonly actions$: Actions) {}
}
