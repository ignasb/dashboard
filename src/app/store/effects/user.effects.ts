import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserApiService } from 'src/app/core/services/user-api.service';
import { UserActions } from '../actions';

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

  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserApiService
  ) {}
}
