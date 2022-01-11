import { createAction, props } from '@ngrx/store';
import { ILoginCredentials } from 'src/app/core/models/data/user';
import { IUserCredentialsApi } from 'src/app/core/models/http/user-api';

export const login = createAction(
  '[User] LOGIN',
  props<{ credentials: ILoginCredentials }>()
);
export const loginSuccess = createAction(
  '[User] LOGIN_SUCCESS',
  props<{ user: IUserCredentialsApi }>()
);
export const loginFail = createAction(
  '[User] LOGIN_FAIL',
  props<{ error: string }>()
);
export const logout = createAction('[User] LOGOUT');
export const refreshToken = createAction('[User] REFRESH_TOKEN');
export const refreshTokenSuccess = createAction('[User] REFRESH_TOKEN_SUCCESS');
export const refreshTokenFail = createAction('[User] REFRESH_TOKEN_FAIL');
