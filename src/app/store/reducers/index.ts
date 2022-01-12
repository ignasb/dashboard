import { ActionReducerMap } from '@ngrx/store';
import * as userReducers from './user.reducer';
import * as salesReducers from './sales.reducer';

export interface IAppState {
  user: userReducers.IUserState;
  sales: salesReducers.ISalesState;
}

export const reducers: ActionReducerMap<IAppState> = {
  user: userReducers.userReducer,
  sales: salesReducers.salesReducer,
};
