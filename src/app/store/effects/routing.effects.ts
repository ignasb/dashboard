import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { UserActions } from '../actions';

@Injectable()
export class RoutingEffects {
  public routeToDashboard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.router.navigate(['dashboard']))
      ),
    { dispatch: false }
  );

  public routeToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.router.navigate(['login']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}
}
