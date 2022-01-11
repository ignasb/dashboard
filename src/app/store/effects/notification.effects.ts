import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { tap } from 'rxjs';
import { UserActions } from '../actions';

@Injectable()
export class NotificationEffects {
  public successNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap((action) => {
          this.showSuccessNotification(action);
        })
      ),
    { dispatch: false }
  );

  public failureNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginFail),
        tap((action) => {
          this.showFailureNotification(action);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly snackBar: MatSnackBar
  ) {}

  showSuccessNotification(action: Action): void {
    const msg: string | null = this.getMessage(action);

    if (msg) {
      this.snackBar.open(msg, undefined, {
        panelClass: ['success-style'],
        duration: 5000,
      });
    }
  }

  showFailureNotification(action: Action): void {
    const msg: string | null = this.getMessage(action);

    if (msg) {
      this.snackBar.open(msg, undefined, {
        panelClass: ['failure-style'],
        duration: 5000,
      });
    }
  }

  private getMessage(action: Action): string | null {
    switch (action.type) {
      case UserActions.loginSuccess.type:
        return 'Logged in successfully.';
      case UserActions.loginFail.type:
        return 'Failed to log in.';
      default:
        return null;
    }
  }
}
