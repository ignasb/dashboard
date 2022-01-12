import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models';
import { UserActions } from 'src/app/store/actions';
import { IAppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss'],
})
export class LoginShellComponent {
  constructor(private readonly store$: Store<IAppState>) {}

  login(credentials: User.ILoginCredentials): void {
    this.store$.dispatch(UserActions.login({ credentials }));
  }
}
