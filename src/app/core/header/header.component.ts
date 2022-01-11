import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/store/actions';
import { IAppState } from 'src/app/store/reducers';
import { UserSelectors } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName$: Observable<string | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private readonly store$: Store<IAppState>,
    private readonly userSelectors: UserSelectors
  ) {
    this.userName$ = this.userSelectors.getUserName$;
    this.isLoggedIn$ = this.userSelectors.isLoggedIn$;
  }

  public logout(): void {
    this.store$.dispatch(UserActions.logout());
  }
}
