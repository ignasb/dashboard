import { ActionReducerMap } from '@ngrx/store';
import * as userReducers from './user.reducer';

export interface IAppState {
  user: userReducers.IUserState;
}

export const reducers: ActionReducerMap<IAppState> = {
  user: userReducers.userReducer,
};
