import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { catchError, filter, map, withLatestFrom } from 'rxjs/operators';
import { UserApiService } from 'src/app/core/services/user-api.service';
import { UserActions } from '../actions';
import { UserSelectors } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      switchMap(({ credentials }) =>
        this.userService.login$(credentials).pipe(
          map((data) => UserActions.loginSuccess({ user: data })),
          catchError((error) =>
            of(UserActions.loginFail({ error: error.toString() }))
          )
        )
      )
    )
  );

  public refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.refreshToken),
      withLatestFrom(this.userSelectors.getUserData$),
      filter((userData) => !!userData),
      switchMap((userData) =>
        this.userService.refreshToken$(userData as any).pipe(
          map((token) => UserActions.refreshTokenSuccess({ token })),
          catchError((error) => of(UserActions.refreshTokenFail))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserApiService,
    private readonly userSelectors: UserSelectors
  ) {}
}
