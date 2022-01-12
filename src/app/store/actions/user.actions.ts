import { createAction, props } from '@ngrx/store';
import { User, UserApi } from '../../core/models';

export const login = createAction(
  '[User] LOGIN',
  props<{ credentials: User.ILoginCredentials }>()
);
export const loginSuccess = createAction(
  '[User] LOGIN_SUCCESS',
  props<{ user: UserApi.IUserCredentialsApi }>()
);
export const loginFail = createAction(
  '[User] LOGIN_FAIL',
  props<{ error: string }>()
);
export const logout = createAction('[User] LOGOUT');
export const refreshToken = createAction('[User] REFRESH_TOKEN');
export const refreshTokenSuccess = createAction(
  '[User] REFRESH_TOKEN_SUCCESS',
  props<{ token: string }>()
);
export const refreshTokenFail = createAction('[User] REFRESH_TOKEN_FAIL');
