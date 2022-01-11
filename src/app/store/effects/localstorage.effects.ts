import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { IUserCredentialsApi } from 'src/app/core/models/http/user-api';
import { UserActions } from '../actions';

@Injectable()
export class LocalStorageEffects {
  public loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(({ user }) => {
          this.setUserData(user);
        })
      ),
    { dispatch: false }
  );

  public logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.clearUserData())
      ),
    { dispatch: false }
  );

  private STORAGE_KEY = 'USER_DATA';
  constructor(private readonly actions$: Actions) {}

  setUserData(user: IUserCredentialsApi): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  clearUserData(): void {
    localStorage.setItem(this.STORAGE_KEY, '');
  }
}
