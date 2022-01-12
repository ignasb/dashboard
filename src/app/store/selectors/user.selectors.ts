import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { IAppState } from '../reducers';

const getAppState = createFeatureSelector<IAppState>('appState');

const getUserState = createSelector(getAppState, (state) => state.user);
const getUserName = createSelector(getUserState, (state) =>
  state.userData ? state.userData.name : null
);
const getIsLoggedIn = createSelector(getUserState, (state) => !!state.userData);
const getUserData = createSelector(
  getUserState,
  (state) => state.userData || null
);
const getUserToken = createSelector(
  getUserState,
  (state) => state?.userData?.token
);

@Injectable()
export class UserSelectors {
  public getUserName$ = this.store$.pipe(select(getUserName));
  public isLoggedIn$ = this.store$.pipe(select(getIsLoggedIn));
  public getUserData$ = this.store$.pipe(select(getUserData));
  public getUserToken$ = this.store$.pipe(select(getUserToken));

  constructor(private readonly store$: Store<IAppState>) {}
}
