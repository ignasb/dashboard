import { createReducer, on } from '@ngrx/store';
import { IUserCredentialsApi } from 'src/app/core/models/http/user-api';
import { UserActions } from './../actions';

export interface IUserState {
  userData: IUserCredentialsApi | null;
}

const initialState: IUserState = {
  userData: null,
};

export const userReducer = createReducer<IUserState>(
  initialState,
  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    userData: { ...user },
  })),
  on(UserActions.loginFail, (state) => ({
    ...state,
  })),
  on(UserActions.logout, (state) => ({ ...state, userData: null }))
);
